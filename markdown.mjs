export function eventToMdTable (event) {
  const { target } = event
  return `|${target.name}|${Math.round(target.hz).toLocaleString()}|${target.stats.sample.length}|`
}

export function createTableHeader(columns) {
  let header = '|'
  let headerSep = '|'
  for (const col of columns) {
    header += `${col}|`
    headerSep += '-|'
  }

  return `${header}\n${headerSep}`
}

export function H2(title) {
  return `## ${title}\n`
}
