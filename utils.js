const semver = require('semver')
const { H2 } = require('./markdown')

function skipIfVersion(version) {
  if (semver.satisfies(process.version, version)) {
    process.exit(0)
  }
}

function skipIfVersionWithMessage(version, name) {
  if (semver.satisfies(process.version, version)) {
    console.log(H2(name))
    console.log('This is not supported in this Node.js version')

    process.exit(0)
  }
}

module.exports = {
  skipIfVersion,
  skipIfVersionWithMessage,
}
