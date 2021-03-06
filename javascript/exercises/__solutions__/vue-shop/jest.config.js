module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupTestFrameworkScriptFile: '<rootDir>/tests/jest.setup.js',
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testPathIgnorePatterns: ['^(?!.*([/\\\\]src[/\\\\]node_modules[/\\\\])).*([/\\\\]node_modules[/\\\\])'],
  transformIgnorePatterns: ['^(?!.*([/\\\\]src[/\\\\]node_modules[/\\\\])).*([/\\\\]node_modules[/\\\\])'],
};
