'use strict'

/**
 * egg-grpc-client default config
 * @member Config#grpcClient
 * @property {String} SOME_KEY - some description
 */
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
}
