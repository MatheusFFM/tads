module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}',
    '!src/**/*.d.ts',
    '!src/router.ts',
    '!src/main.ts',
    '!src/registerServiceWorker.ts',
    '!**/node_modules/**',
    '!**/vuetify.ts',
    '!**/store/index.ts',
    '!**/router/index.ts',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup/post-env.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'vue-router': '<rootDir>/tests/unit/setup/router',
    'vue-auto-routing': '<rootDir>/tests/unit/setup/router',
    'vue-router-layout': '<rootDir>/tests/unit/setup/router',
  }
};
