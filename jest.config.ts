import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",  
  testEnvironment: "jsdom",  
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',    
    '!<rootDir>/src/app/**/*',
    '!<rootDir>/src/utils/**/*',
    '!<rootDir>/src/locales/**/*',
    '!<rootDir>/src/providers/**/*',    
    '!<rootDir>/src/**/middleware.ts',    
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/cypress'
  ],
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'   
  }
};

export default config;
