# react-google-signin-button

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

![Preview Image](docs/sign-in-with-google.png)

"Sign in with Google" button for React. Follows [official guidelines](https://developers.google.com/identity/branding-guidelines).

## Installation

```shell
$ npm install react-google-signin-button
```

## Usage

Import `GoogleButton` component and required CSS file.

```js
import GoogleButton from 'react-google-signin-button';
import 'react-google-signin-button/dist/button.css';

function App() {
  return (
    <div>
      <GoogleButton
        onClick={() => { console.log('Google button clicked'); }}
      />
    </div>
  );
}
```

## Props

| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| `label` | string | `Sign in with Google` | Text in the button. Use empty string when you want to display logo only. See recommended values from [Google documentation](https://developers.google.com/identity/branding-guidelines) |
| `theme` | string | `light` | `light`, `dark` or `neutral` |
| `shape` | string | `rectangular` | `rectangular`, `pill`, `square` or `circle` |
| `width` | string | `undefined` | Button width, for example `300px` |
| `logoAlign` | string | `left` | When using `width`, logo can be aligned with this. `left` or `center` |

Other props are passed to `button` element, for example `onClick` and `disabled`.

## Development

```shell
$ npm run rollup
```

This builds files under `dist/` directory.
