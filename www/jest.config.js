module.export = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/__tests__/>(*.)test.{ts, tsx}'],
  moduleFileExtensions: [ 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['jest-dom/extend-expect', 'react-testing-library/cleanup-after-each']
};