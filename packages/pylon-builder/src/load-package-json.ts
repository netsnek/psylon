// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import path from 'path'
import {readFile} from 'fs/promises'

export async function loadPackageJson(): Promise<{
  baseURL?: string
  pylon?: {
    external?: string[]
  }
}> {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json')

  const file = await readFile(packageJsonPath)
  const packageJson = JSON.parse(file.toString())
  return packageJson
}
