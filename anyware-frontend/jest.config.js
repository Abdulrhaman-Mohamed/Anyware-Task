// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
