import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  it('getFullYear returns the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  it('getFooterCopy returns the right string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('getLatestNotification returns the right string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
