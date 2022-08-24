&"scripts\build-ts-protobuf.ps1"

$env:NODE_ENV="development"; ts-node ./server/src/index.ts
