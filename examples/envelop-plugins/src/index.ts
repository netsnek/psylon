// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import {app, PylonConfig, ServiceError} from 'psylon'
import {useErrorHandler} from '@envelop/core'

export const graphql = {
  Query: {
    hello: () => {
      throw new ServiceError('Hello, world!', {
        code: 'HELLO_WORLD',
        statusCode: 400
      })
    }
  },
  Mutation: {}
}

export const config: PylonConfig = {
  plugins: [
    useErrorHandler(({errors, context, phase}) => {
      console.error(errors)
    })
  ]
}

export default app
