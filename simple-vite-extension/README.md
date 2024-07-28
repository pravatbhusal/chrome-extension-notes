# Simple Vite Extension
This is a simple chrome extension bootstraped with `npm create vite@latest`.

To get started, run:
```
npm install
npm run dev
```

To use the extension locally, run:
```
npm run build
```

And upload the build folder on the chrome://extensions/ page.

# Why Vite?
Vite is a lightning fast development environment that uses native ES modules (ESM) to compile code on the fly, which can result in faster build times and instant browser updates. Compared to webpack that bundles all of your code into a single index.js, Vite will only transform source code on demand when the browser requests it.

This makes HMR (hot module replacement) very fast because it will only reload the modules that were updated instead of bundling the whole project on each edit.

Another benefit is that the dev server can be started instantly because it's serving modules "as-you-go" instead of all at once.

See more here: https://vitejs.dev/guide/why
