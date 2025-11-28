// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import {app} from 'psylon'

export const graphql = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    }
  },
  Mutation: {}
}

export default app
