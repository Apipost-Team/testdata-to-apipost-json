import { str2testData } from '../src/testData'


describe('works', () => {

  it('key value', () => {
    console.log('!!!!', str2testData(`name,age\r\njoin,18`));
    expect(str2testData(`name,age\r\njoin,18`)).toEqual([{ name: 'join', age: '18' }]);
  });
  it('json', () => {
    expect(str2testData(`
    [
      {
        "name": "aa",
        "password": "111", "age": "123"
      },
      { "name": "bb" },
      {
        "name": "cc",
        "password": "444"
      }
    ]`)).toEqual([
      {
        "name": "aa",
        "password": "111", "age": "123"
      },
      { "name": "bb" },
      {
        "name": "cc",
        "password": "444"
      }
    ]);
  });
});

