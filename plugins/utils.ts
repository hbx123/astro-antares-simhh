import fs from 'fs'
import path from 'path'

export const importRaw = (...paths: string[]) =>
  fs.readFileSync(path.join(...paths)).toString()