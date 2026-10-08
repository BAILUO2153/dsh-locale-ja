import { defineConfig } from "@playwright/test";

const suite = process.env.DSH_E2E_SUITE ?? "all";
if (!["all", "core", "mock"].includes(suite)) throw new Error(`Unknown E2E suite: ${suite}`);

export default defineConfig({
  ...(suite === "mock" ? { grep: /conversation:/ } : {}),
  ...(suite === "core" ? { grepInvert: /conversation:/ } : {}),
  testDir: ".",
  fullyParallel: false,
  workers: 1, // phases mutate shared Docker state; order is load-bearing
  retries: 0,
  reporter: [["list"]],
  outputDir: ".artifacts",
  use: {
    baseURL: process.env.DSH_BASE_URL ?? "http://127.0.0.1:3080",
    locale: "en-US", // pins the initial DSH locale to English
    headless: true,
    screenshot: "only-on-failure",
  },
});
