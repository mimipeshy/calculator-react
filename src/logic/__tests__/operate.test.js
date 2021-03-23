import Operate from '../operate';

describe('Operate', () => {
  it('tests the + operations', () => {
    const result = Operate('1', '2', '+');
    expect(result).toBe('3');
  });
  it('tests the minus(-) operation', () => {
    const result = Operate('5', '2', '-');
    expect(result).toBe('3');
  });
  it('tests the multiplication(X) operation', () => {
    const result = Operate('5', '2', 'X');
    expect(result).toBe('10');
  });
  it('tests the Division(/) operation', () => {
    const result = Operate('12', '3', '÷');
    expect(result).toBe('4');
  });
  it('tests the division by zero error', () => {
    const result = Operate('1', '0', '÷');
    expect(result).toBe('Err div by 0');
  });
});
