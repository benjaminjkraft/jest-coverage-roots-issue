module.exports = {
    rootDir: __dirname,
    collectCoverageFrom: ["<rootDir>/src/**"],
    projects: [
        // works with `roots: ["<rootDir>/src"]`
        {displayName: "tests", roots: ["<rootDir>/src/test"]},
    ],
}
