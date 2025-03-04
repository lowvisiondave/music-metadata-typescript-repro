This is a reproduction repro for a TypeScript error with [music-metadata](https://github.com/Borewit/music-metadata).

## Issue

TypeScript throw an error when doing the following:

```ts
import { parseFile } from "music-metadata";
```

Because `node_modules/music-metadata/lib/core.d.ts` does not include a type for `parseFile`.

Adding `// @ts-expect-error` allows the application to build successfully, so it seems to just a types issue.

## How to reproduce

1. Run `pnpm install`
1. Run `pnpm build`
1. See error in console
