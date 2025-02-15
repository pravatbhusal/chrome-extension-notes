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

The build command will compile the Typescript files using `tsc` and then bundle the code using `vite build`. It also copies everything from the `public` folder to the `dist` folder. The `public` folder should include your manifest.json file, which is the configuration file for your chrome extension.

Lastly, upload the `dist` folder on the chrome://extensions/ web page in the Chrome browser to test your chrome extension.

# Why Vite?

Vite is a lightning fast development environment that uses native ES modules (ESM) to compile code on the fly, which can result in faster build times and instant browser updates. Compared to webpack that bundles all of your code into a single index.js, Vite will only transform source code on demand when the browser requests it.

This makes HMR (hot module replacement) very fast because it will only reload the modules that were updated instead of bundling the whole project on each edit.

Another benefit is that the dev server can be started instantly because it's serving modules "as-you-go" instead of all at once.

See more here: https://vitejs.dev/guide/why
