# Google Meet CLI

> Opens a Google Meet session in the default browser with a preset name and optional user pre-selected

### Features

- Doesnt require any security relevant informations from your google account
- Supports multiple google accounts
- Works also without any input

### Install

```
npm install google-meet-cli -g
```

### Usage

```
$ meet --help
	Usage
	  $ meet <name>

	Options
	  --name, -n  Give the Meet room a name
	  --user, -u  If you've multiple google accounts you may want to pass which user you want to create a new room.

	Examples
	  $ meet hello-world --user 2
```
