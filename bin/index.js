#!/usr/bin/env node

const { spawnSync } = require("child_process");
const args = process.argv.slice(2);
const target = args[0] || "my-app";
const repo = "abdullahalsuad/mern-boilerplate-js";

console.log(`Scaffolding "${target}" from ${repo}...`);
const r = spawnSync("npx", ["degit", `${repo}#main:template`, target], {
  stdio: "inherit",
});

if (r.status !== 0) {
  console.error("Scaffold failed.");
  process.exit(r.status || 1);
}

console.log(`Done. cd ${target} && pnpm install (or npm/yarn).`);
