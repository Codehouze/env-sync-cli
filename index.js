#!/usr/bin/env node

const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");

const ENV_PATH = path.resolve(process.cwd(), ".env");
const EXAMPLE_PATH = path.resolve(process.cwd(), ".env.example");

function generateEnvExample() {
  if (!fs.existsSync(ENV_PATH)) {
    console.error(".env file not found.");
    return;
  }

  const envContent = fs.readFileSync(ENV_PATH, "utf-8");
  const exampleContent = envContent
    .split("\n")
    .filter((line) => line.trim() !== "" && !line.startsWith("#"))
    .map((line) => {
      const [key] = line.split("=");
      return `${key}=`;
    })
    .join("\n");

  fs.writeFileSync(EXAMPLE_PATH, exampleContent);
  console.log("✅ .env.example generated.");
}

function startWatcher() {
  chokidar.watch(ENV_PATH).on("change", () => {
    console.log("🔄 Detected change in .env. Regenerating...");
    generateEnvExample();
  });
}

const args = process.argv.slice(2);
generateEnvExample();

if (args.includes("--watch")) {
  startWatcher();
}
