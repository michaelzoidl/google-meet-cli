const slugify = require('@sindresorhus/slugify');

const generateMeetRoomUrl = (props) => {
  const { name, authuser } = props || {};

  if (authuser && name) {
    return `https://meet.google.com/lookup/${slugify(name)}?authuser=${authuser}`;
  }

  if (authuser) {
    return `https://meet.google.com/new?authuser=${authuser}`;
  }

  if (!name) return 'https://meet.google.com/new';

  return `https://meet.google.com/lookup/${slugify(name)}`;
};

module.exports = {
  generateMeetRoomUrl,
};
