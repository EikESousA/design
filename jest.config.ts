import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  roots: ["<rootDir>"],
  modulePaths: ["."],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  clearMocks: true,
  coverageProvider: "v8",
  collectCoverage: false,
  collectCoverageFrom: [
    "src/pages/**/*.tsx",
    "src/components/**/*.tsx",
    "src/hooks/**/*.tsx",
    "src/layout/**/*.tsx",
  ],
};

export default jestConfig;
