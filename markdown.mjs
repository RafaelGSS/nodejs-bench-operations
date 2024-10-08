export function taskToMdTable (result) {
  return `|${result.name}|${parseInt(result.opsSec.toString(), 10).toLocaleString()}|${result.iterations}|`
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
