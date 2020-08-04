import { URLchecker } from "./checkURL.js"

describe("Testing the URL checker functionality", () => {
    test("Testing the URLchecker() function", () => {
           expect(URLchecker).toBeDefined();
           expect(URLchecker("https://webpack.js.org/loaders/")).toBeTruthy();
           expect(URLchecker("webpackjs")).toBeFalsy();
})});
