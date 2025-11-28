// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import { app } from 'psylon'
import { getResolvedFields } from './get-resolved-fields'

const getUser = (): {
  firstName: string,
  lastName: string,
  username: string
} => {
  const fields = getResolvedFields()

  return {
    firstName: fields.nestedFields.user.flatFields.includes("firstName") ? "John" : "",
    lastName: fields.nestedFields.user.flatFields.includes("lastName") ? "Doe" : "",
    username: fields.nestedFields.user.flatFields.includes("username") ? "johndoe" : ""
  }
}

export const graphql = {
  Query: {
    data: () => {

      const user = getUser()

      console.log("Got user", user)

      return {
        user,
      }
    }
  },
  Mutation: {}
}

export default app
