import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "qmueo5",
  e2e: {
    baseUrl: "http://localhost:3000", // npm start로 Next.js dev 서버 실행되니까
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
