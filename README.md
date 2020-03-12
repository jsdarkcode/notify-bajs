# 📦 Notify BaJS

## Installation

```
npm install notify-bajs
```

## Usage

```js
import NotifyBaJS from "notify-bajs";

NotifyBaJS({
  type: "success",
  title: "Notify BaJS",
  content: "Hello world"
});
```

## Optional parameters

- `placement`: (string) - Position of notify, can be one of `top-left` `top-right` `bottom-left` `bottom-right` (default: `top-right`)
- `classContainer`: (string) - Customized CSS class
- `duration`: (number) - Time in millisecond before notify is closed (default: 3000)
- `width`: (number) - max-width css (default: 300)
- `delay`: (number) - Delay in millisecond, before tooltip is show
- `top`: (number) - Distance from the top of the viewport (unit: pixels)
