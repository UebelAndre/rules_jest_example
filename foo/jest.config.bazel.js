/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: ['**/*.js', '**/*.ts', '!**/node_modules/**', '!**/coverage/**'],
    preset: 'ts-jest',
    setupFiles: [
        './setupTests.js'
    ],
    testEnvironment: 'node',
    testTimeout: 300000
};

module.exports = config;
