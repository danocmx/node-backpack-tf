# backpack-tf
Unopinionated typescript wrapper for backpack.tf API.

## Instalation
`npm install backpack.tf-api` or `yarn add backpack.tf-api`

## Usage
```ts
import { BackpackTFAPI } from 'backpack.tf-api';

const bptf = new BackpackTFAPI({
  token: 'your backpack.tf token, optional if you dont need it',
  apiKey: 'your backpack.tf api key, optional if you dont need it',
  requestClient: /* request client implementation, optional */
});

await bptf['/* api method you choose */']({ ...parameters });
```

## Api coverage
Not all api's are implemented in this package, if there are some you require in your project, feel free to open a pull request. The request system is easy enough so you don't need to worry about the specifics, just the types.
