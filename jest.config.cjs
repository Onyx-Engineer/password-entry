module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[jt]sx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.app.json" }],
  },
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
