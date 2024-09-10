import { MathService } from '../src/math.service';

describe('Calculator', () => {
  const calculator = new MathService();

  describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds 1 + (-3) to equal -2', () => {
      expect(calculator.add(1, -3)).toBe(-2);
    });
  });
});
