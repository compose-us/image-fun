import captureInput from "./capture-input";

describe("capture-input", () => {
    it("should work", () => {
        expect(captureInput("cat", "x", 1)).toEqual("cxt")
    })
});
