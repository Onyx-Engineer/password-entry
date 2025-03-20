module.exports = {
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest", // or 'ts-jest' for TypeScript projects
  },
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
