#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('open');
const { generateMeetRoomUrl } = require('./lib');

const cli = meow(
  `
	Usage
	  $ meet <room-name>

	Options
	  --user, -u  If you've multiple google accounts you may want to pass which user you want to create a new room.

	Examples
	  $ meet hello-world --user 2
`,
  {
    flags: {
      user: {
        type: 'string',
        alias: 'u',
      },
    },
  }
);

open(
  generateMeetRoomUrl({
    name: cli.input[0],
    authuser: cli.flags.user,
  })
);
