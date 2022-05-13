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
    '!src/registerRouteConfig.ts',
    '!**/node_modules/**',
  ],
};
