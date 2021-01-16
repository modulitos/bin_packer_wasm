// node --experimental-vm-modules node_modules/.bin/jest --clearCache
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testEnvironment: 'jest-environment-node',
  roots: ['<rootDir>/src'],
  transform: {},
  // transform: {
  //   '\\.(js|jsx)?$': 'babel-jest',
  //   "\\.(ts|tsx)$": "ts-jest"
  // },

  // testMatch: ['<rootDir>/src/__tests__/(*.)test.{ts, tsx}'],

  // moduleFileExtensions: [ 'json', 'node', 'tsx', 'ts', 'js', 'jsx','wasm'],
  // testPathIgnorePatterns: ['/node_modules/', '/public/'],
  // testPathIgnorePatterns: ['/public/'],
  // setupFilesAfterEnv: [
  //   // "./setupJest.js",
  //   // 'jest-dom/extend-expect',
  //   // 'react-testing-library/cleanup-after-each'
  // ],
  // https://github.com/facebook/jest/issues/2702#issuecomment-636853186
  "transformIgnorePatterns": ["node_modules/(?!(bin_packer_3d|package_2)/)"],
  // "transformIgnorePatterns": ["node_modules/bin_packer_3d/(?!(bin_packer_3d_bg.wasm|package_2)/)"],
  "resolver": "jest-module-field-resolver"
};