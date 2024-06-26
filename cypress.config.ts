import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    fixturesFolder: false,
    supportFile: false,            
    specPattern: "tests/cypress/e2e/**/*.{js,jsx,ts,tsx}",
  }  
});