module.exports = {
    collectCoverage: true,
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
    ],
    globals: {
        window: true,
    },
    collectCoverageFrom: ["**/*.jsx", "**/*.js"],
    moduleDirectories: ["node_modules", ".", "__mocks__", "components", "helpers", "pages", "redux"],
    testMatch: [
        "**/*.(test|spec).(js)",
    ],
    setupFilesAfterEnv: ["<rootDir>/test.setup.js"],
    coverageReporters: [
        "json",
        "lcov",
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "jest.config.js",
        "next.config.js",
        "test.setup.js",
        "/locales/",
        "/coverage/",
        "pages/_document.js",
    ],
    moduleNameMapper: {
        "^.+\\.(css|scss)$": "identity-obj-proxy",
    },
};