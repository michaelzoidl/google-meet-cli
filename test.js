const { generateMeetRoomUrl } = require('./lib');

describe('generateMeetRoomUrl', () => {
  it('returns a string', () => {
    expect(typeof generateMeetRoomUrl()).toBe('string');
  });

  it('returns by default a create new room meet url', () => {
    expect(generateMeetRoomUrl()).toBe('https://meet.google.com/new');
  });

  it('returns a room with a specific name', () => {
    expect(generateMeetRoomUrl({ name: 'hello world' })).toBe('https://meet.google.com/lookup/hello-world');
  });

  it('returns a room url with an auth-user parameter in the url', () => {
    expect(generateMeetRoomUrl({ authuser: 2 })).toBe('https://meet.google.com/new?authuser=2');
  });

  it('returns a room url with an auth-user parameter and an custom name in the url', () => {
    expect(generateMeetRoomUrl({ name: 'hello world', authuser: 2 })).toBe('https://meet.google.com/lookup/hello-world?authuser=2');
  });
});
