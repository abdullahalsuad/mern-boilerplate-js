const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const testProjectName = "test-mern-project";
const testProjectPath = path.resolve(testProjectName);

console.log("🧪 Testing mern-boilerplate-js package...");

// Clean up any existing test project
function cleanup() {
  if (fs.existsSync(testProjectPath)) {
    console.log("🧹 Cleaning up existing test project...");
    fs.rmSync(testProjectPath, { recursive: true, force: true });
  }
}

// Clean up before starting
cleanup();

try {
  // Test the CLI
  console.log("🚀 Running CLI test...");
  const result = spawnSync("node", ["bin/index.js", testProjectName], {
    stdio: "inherit",
    cwd: process.cwd(),
  });

  if (result.status !== 0) {
    console.error("❌ CLI test failed");
    process.exit(1);
  }

  // Check if project was created
  if (!fs.existsSync(testProjectPath)) {
    console.error("❌ Test project was not created");
    process.exit(1);
  }

  // Check if essential files exist
  const requiredFiles = [
    path.join(testProjectPath, "package.json"),
    path.join(testProjectPath, "backend"),
    path.join(testProjectPath, "frontend"),
  ];

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Required file/directory missing: ${file}`);
      process.exit(1);
    }
  }

  console.log("✅ All tests passed!");
  console.log("📦 Package is ready for publishing");
} catch (error) {
  console.error("❌ Test failed with error:", error.message);
  process.exit(1);
} finally {
  // Clean up test project
  cleanup();
}
