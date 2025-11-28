// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import 'psylon'

declare module 'psylon' {
  interface Bindings {
    DB: D1Database
  }

  interface Variables {}
}
