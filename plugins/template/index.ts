import fs from 'fs'
import path from 'path'

export default (fileName: string) => {
  const _filePath = path.resolve('./plugins/template/' + fileName)
  return fs.readFileSync(_filePath, 'utf-8')
}
