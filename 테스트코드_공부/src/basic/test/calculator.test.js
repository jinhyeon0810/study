const Calculator = require("../../calculator");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("set", () => {
    //test code
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  it("clear", () => {
    cal.set(2);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("add should throw an Error if value is greater than 100", () => {
    //에러를 예상하는 코드는 expect 안에 콜백함수전달, 안에서 에러 던져짐
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract", () => {
    cal.set(0);
    cal.subtract(5);
    expect(cal.value).toBe(-5);
  });

  it("multiply", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.set(0);
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
