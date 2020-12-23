# backpack-tf
A wrapper for backpack.tf api written in typescript. Dependencies are injected so you can handle everything yourself.
Currently it is not complete and there's no documentation.

## Use cases
Use `createBPInstance` to get access to the API.

Methods:
- `searchClassifieds`
- `createListings`
- `deleteListings`
- `sendHeartbeat`
- `getMyListings`

Options and returns are fully typed so no documentation here until the package is complete.

## Warning
A lot of things in this package are experimental and are subject to change in next major release.