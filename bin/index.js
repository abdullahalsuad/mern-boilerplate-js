#!/usr/bin/env node

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Function to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Display help
function showHelp() {
  console.log(`
Usage: create-mern-app <project-name>

Creates a new MERN stack application with standard boilerplate.

Arguments:
  project-name    Name of your new project directory

Examples:
  create-mern-app my-awesome-app
  npx mern-boilerplate-js my-project
  
Options:
  -h, --help     Show this help message
  -v, --version  Show version number
`);
}

// Display version
function showVersion() {
  const packageJson = require("../package.json");
  console.log(packageJson.version);
}

// Validate project name
function validateProjectName(name) {
  if (!name) {
    console.error("❌ Error: Project name is required");
    showHelp();
    process.exit(1);
  }

  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    console.error(
      "❌ Error: Project name can only contain letters, numbers, hyphens, and underscores"
    );
    process.exit(1);
  }

  if (fs.existsSync(name)) {
    console.error(`❌ Error: Directory "${name}" already exists`);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

// Handle flags
if (args.includes("-h") || args.includes("--help")) {
  showHelp();
  process.exit(0);
}

if (args.includes("-v") || args.includes("--version")) {
  showVersion();
  process.exit(0);
}

const projectName = args[0] || "my-mern-app";

// Validate project name
validateProjectName(projectName);

// Local template path
const localTemplate = path.resolve(__dirname, "../template");

// Determine template source
let templateSource;
let usingLocal = false;

if (fs.existsSync(localTemplate)) {
  templateSource = localTemplate;
  usingLocal = true;
  console.log(`📁 Using local template at ${localTemplate}`);
} else {
  // Fallback to GitHub repo
  templateSource = "abdullahalsuad/mern-boilerplate-js#main:template";
  console.log(`🌐 Using GitHub template: ${templateSource}`);
}

console.log(`\n🚀 Creating "${projectName}" MERN application...`);

try {
  if (usingLocal) {
    // Use filesystem copying for local templates
    console.log("📁 Copying template files...");
    copyDirectory(templateSource, projectName);
  } else {
    // Use degit for remote templates
    console.log("📦 Preparing degit...");
    const result = spawnSync("npx", ["degit", templateSource, projectName], {
      stdio: "inherit",
      cwd: process.cwd(),
    });

    if (result.status !== 0) {
      console.error("\n❌ Scaffolding failed. Please check:");
      console.error("  - Internet connection (if using GitHub template)");
      console.error("  - Template repository exists and is accessible");
      console.error("  - You have write permissions in this directory");
      process.exit(result.status || 1);
    }
  }
} catch (error) {
  console.error(`\n❌ Failed to create project: ${error.message}`);
  process.exit(1);
}

console.log("\n✅ Project created successfully!");
console.log("\n📋 Next steps:");
console.log(`  1. cd ${projectName}`);
console.log("  2. npm install (or yarn install / pnpm install)");
console.log("  3. Follow the README.md for setup instructions");
console.log("\n🎉 Happy coding!");
