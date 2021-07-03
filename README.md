# 🍬 Kandy UIkit

**This repository is not used anymore. See the [https://github.com/kandyswap/kandy-toolkit](Kandy toolkit) instead**

[![Version](https://img.shields.io/npm/v/@kandyswap-libs/uikit)](https://www.npmjs.com/package/@kandyswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@kandyswap-libs/uikit)](https://www.npmjs.com/package/@kandyswap-libs/uikit)

Kandy UIkit is a set of React components and hooks used to build pages on Kandy's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @kandyswap-libs/uikit`

## Setup

### Theme

Before using Kandy UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@kandyswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@kandyswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://kandyswap.github.io/kandy-uikit/)
