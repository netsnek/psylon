// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
