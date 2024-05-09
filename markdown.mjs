export function taskToMdTable (task) {
  const { result } = task
  return `|${task.name}|${parseInt(result.hz.toString(), 10).toLocaleString()}|${result.samples.length}|`
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
