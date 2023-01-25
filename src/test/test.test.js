const { f } = require("../impl/covered")

describe("f", () => {
    it("should return 1", () => {
        expect(f()).toEqual(1)
    })
})
