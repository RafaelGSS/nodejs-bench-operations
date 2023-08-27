const semver = require('semver')

function skipIfVersion(version) {
  if (semver.satisfies(process.version, version)) {
    process.exit(0)
  }
}

module.exports = {
  skipIfVersion,
}
