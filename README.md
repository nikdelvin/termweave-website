# Termweave website

The landing page for [Termweave](https://github.com/nikdelvin/termweave), a config-driven
Tauri + OpenTUI builder for native desktop terminal apps.

## Development

```sh
npm install
npm run dev
```

Astro runs the development server in the background. Use `npm run dev:status`,
`npm run dev:logs`, and `npm run dev:stop` to manage it.

## Checks

```sh
npm run check
npm run build
```

The static production build is written to `dist/`.

## Deployment

Pull requests deploy to Firebase preview channels. Pushes to `main` deploy the `termweave`
Hosting target in the `hub-by-nikdelvin` Firebase project.

Production: [termweave.by.nikdelv.in](https://termweave.by.nikdelv.in)
