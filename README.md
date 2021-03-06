# react-native epg

![linting](https://github.com/wouterds/react-native-epg/workflows/linting/badge.svg)

## Setup

```bash
# switch node version
nvm install

# install dependencies
yarn

# switch ruby version
rbenv install --skip-existing

# iOS dependencies
yarn pods

# .env
cp .env.example .env
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### Workspace settings

```javascript
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```

## Running

```bash
# starting metro bundler for debug
yarn start

# ios debug
yarn ios

# ios release
yarn ios:release

# android debug
yarn android

# android release
yarn android:release
```

## On device performance

### AppleTV 2015

https://user-images.githubusercontent.com/1210628/161704771-995266e1-25bc-47f5-ba7e-75a2d094066e.mp4

### Android TV Askey box

https://user-images.githubusercontent.com/1210628/161706077-3e76527f-5225-4f2e-9e2e-a0ef46efaf1b.mp4
