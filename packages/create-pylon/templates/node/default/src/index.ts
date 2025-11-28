// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import {app} from 'psylon'
import {serve} from '@hono/node-server'

export const graphql = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    }
  },
  Mutation: {}
}

serve(app, info => {
  console.log(`Server running at ${info.port}`)
})
