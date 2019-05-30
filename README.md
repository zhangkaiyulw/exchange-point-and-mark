# Exchange Point and Mark

Exchange selection start and end. Multiple cursors are supported.

By default, `Exchange Point and Mark` doesn't bind to any key bindings. It's
user's right to decide which command goes to which key binding. This is a very
handy editor command, you may not want to invoke it through command palette.

If you are an previously emacs user, you may want to add these to your
`keybindings.json`.

```json
{
  "key": "ctrl+x ctrl+x",
  "command": "exchangePointAndMark",
  "when": "textInputFocus"
}
```

## Need Help?

Open an issue [here](https://github.com/zhangkaiyulw/exchange-point-and-mark/issues).

## License

[MIT](https://github.com/zhangkaiyulw/exchange-point-and-mark/blob/master/LICENSE) @ Victor Zhang
