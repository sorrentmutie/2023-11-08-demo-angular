import { MySecondPipe } from './my-second.pipe';

describe('MySecondPipe', () => {
  it('create an instance', () => {
    const pipe = new MySecondPipe();
    expect(pipe).toBeTruthy();
  });
});
