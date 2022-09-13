import { formatGenre } from "./formatGenre";

describe("Genre formatter", () => {
  it("truthy", () => {
    expect(true).toBe(true);
  });
  it("[test, test2, test3] should return Test, Test2, Test3", () => {
    expect(formatGenre(["test", "test2", "test3"])).toEqual(
      "Test, Test2, Test3"
    );
  });
});
