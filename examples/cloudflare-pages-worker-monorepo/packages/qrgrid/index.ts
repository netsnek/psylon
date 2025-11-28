// Copyright 2024 Nico Schett <nico.schett@cronit.io>
// SPDX-License-Identifier: Apache-2.0

import {generateQr} from '@qrgrid/server'

export function generateQRCode(data: string): string {
  const qr = generateQr(data)

  return qr
}
