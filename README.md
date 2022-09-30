# eslint-config-benestudio

Benestudio specific base linting rules for ESLint

## Requirements

- **[Node.js][4]** (version >= 10)

## Installing

- `npm install -D @benestudioco/eslint-config-benestudio`

## Usage

We export one configurations for your usage.
eslint-config-benestudio

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires eslint, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-markdown, eslint-plugin-prettier, eslint-plugin-jest, eslint-plugin-no-loops, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-sort-keys-shorthand .

---

Create a `.eslintrc` with the following content

```json
{
  "extends": ["@benestudioco/eslint-config-benestudio"]
}
```

### Linting Javascript files

- `eslint .`

### Linting Markdown files

- `eslint . --ext .md`

#### Inspiration

- [Airbnb][7] - [eslint-config-airbnb][8]
- [Yoctol][5] - [eslint-config-yoctol-base][6]

#### License

Copylefted (c) 2019 [Bene Studio][3] Licensed under the [MIT license][2].

[1]: ./LICENSE
[2]: https://www.npmjs.com/package/eslint-config-benestudio
[3]: https://benestudio.co/
[4]: https://nodejs.org
[5]: https://yoctol.ai/
[6]: https://github.com/Yoctol/eslint-config-yoctol-base
[7]: https://www.airbnb.com/
[8]: https://github.com/airbnb/javascript
