import { satisfies } from 'semver'
import { H2 } from './markdown'

export function skipIfVersion(version) {
  if (satisfies(process.version, version)) {
    process.exit(0)
  }
}

export function skipIfVersionWithMessage(version, name) {
  if (satisfies(process.version, version)) {
    console.log(H2(name))
    console.log('This is not supported in this Node.js version')

    process.exit(0)
  }
}
