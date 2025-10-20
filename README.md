# 🍫 Chocolate.js
**Vanilla JS? NO! I like mine with Chocolate!**  
A tiny helper library in **one file**. Completely syntax sugar!

---

## Features
- `$()` – shorthand for `document.querySelector()`  
- `$$()` – shorthand for `document.querySelectorAll()`  
- `listenTo()` – attach event listeners easily  
- `createEl()` – create DOM elements with attributes and optional text  
- `appendEl()` – append elements to a parent element (or selector)
- Minimal, drop-in, **no dependencies**

> Sweet, simple, and ready to sprinkle over your projects.

---

## 🍫 Installation

Chocolate.js works anywhere—browser, Node.js, or AMD loaders. Choose your preferred method:

**Browser:** include the script in your HTML:

```html
<script src="chocolate.js"></script>
<script>
  Chocolate.listenTo('button', 'click', () => alert('Sweet!'));
</script>
```

**Node.js / Bundlers (CommonJS or ESM):** install via npm:
```bash
 npm install js-chocolate
```
Then import it:
```js
// CommonJS
const Chocolate = require('js-chocolate');

// ESM
import Chocolate from 'js-chocolate';


const div = Chocolate.createEl('div', { text: 'Tasty!' });
Chocolate.appendEl(div, document.body);

```

**AMD (RequireJS, etc.):**load as a module:
```js
define(['js-chocolate'], (Chocolate) => {
  Chocolate.listenTo('#saveBtn', 'click', () => console.log('Saved!'));
});
```

Now Chocolate.js is ready to sweeten your code, no matter where you use it! 🍫

---

## Contributors
- [@AmirHosein_Rahmati23]() - Started the whole thing!
- [@Ardelyo](https://github.com/Ardelyo) - Added documentation improvements.
