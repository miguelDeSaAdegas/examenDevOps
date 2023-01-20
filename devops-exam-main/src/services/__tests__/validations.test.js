const { isEmpty, isGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validation tests suites - isGamerTag", () => {
    test("should return true as gamerTag is empty", () => {
        const result = isGamerTag();
        expect(result).toBe(false);
    });

    test("should return true for a gamerTag of 8 character", () => {
        const result = isGamerTag("abcdefgh");
        expect(result).toBe(true);
    });
})
