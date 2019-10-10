# egg-egg-grpc-client-ts-plus

> TypeScript version of egg grpc client plugin.

Inspired by [egg-grpc-client](https://github.com/tw949561391/egg-grpc-client) and [egg-grpc-client-ts](https://github.com/Jeff-Tian/egg-grpc-client-ts).


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-egg-grpc-client-ts-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-egg-grpc-client-ts-plus
[travis-image]: https://img.shields.io/travis/eggjs/egg-egg-grpc-client-ts-plus.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-egg-grpc-client-ts-plus
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-egg-grpc-client-ts-plus.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-egg-grpc-client-ts-plus?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-egg-grpc-client-ts-plus.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-egg-grpc-client-ts-plus
[snyk-image]: https://snyk.io/test/npm/egg-egg-grpc-client-ts-plus/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-egg-grpc-client-ts-plus
[download-image]: https://img.shields.io/npm/dm/egg-egg-grpc-client-ts-plus.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-egg-grpc-client-ts-plus

<!--
Description here.
-->
This package is cloned from  [egg-grpc-client-ts]. The only difference is that you can define max_send_message_length and max_receive_message_length in the config

## Install

```bash
$ npm i egg-grpc-client-ts-plus --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.grpcClient = {
  enable: true,
  package: 'egg-grpc-client-ts-plus',
};
```

## Configuration

```js
// {app_root}/config/config.default.[t|j]s
exports.grpcClient = {
  clients: [
    {
      name: 'main',
      protoPath: 'app/proto/main',
      host: '0.0.0.0',
      port: 50051,
      maxSendMessageLength: -1,
      maxReceiveMessageLength: 4 * 1024 * 1024,
    },
  ],
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
# start test grpc server
npm run test-server

# In another shell, run:
npm run test-local
```