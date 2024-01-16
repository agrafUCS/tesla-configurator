import { ConfigPipe } from '../resolvers/config.pipe';

describe('ConfigPipe', () => {
  it('create an instance', () => {
    const pipe = new ConfigPipe();
    expect(pipe).toBeTruthy();
  });
});
