function formatTotalTime(result) {
  // Format time based on magnitude:
  // - < 0.000001 seconds (< 1 µs): show in nanoseconds
  // - < 0.001 seconds (< 1 ms): show in microseconds
  // - < 1 second: show in milliseconds
  // - >= 1 second: show in seconds
  let timeFormatted;
  if (result.totalTime < 0.000001) {
    // Less than 1 microsecond, show in nanoseconds
    timeFormatted = `${(result.totalTime * 1000000000).toFixed(2)} ns`;
  } else if (result.totalTime < 0.001) {
    // Less than 1 millisecond, show in microseconds
    timeFormatted = `${(result.totalTime * 1000000).toFixed(2)} µs`;
  } else if (result.totalTime < 1) {
    // Less than 1 second, show in milliseconds
    timeFormatted = `${(result.totalTime * 1000).toFixed(2)} ms`;
  } else {
    // 1 second or more, show in seconds
    timeFormatted = `${result.totalTime.toFixed(2)} s`;
  }

  return timeFormatted;
}
export function taskToMdTable (result) {
  if (result.totalTime !== undefined) {
    // Time mode
    return `|${result.name}|${formatTotalTime(result)}|${result.iterations}|`
  }
  // Ops mode (default)
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
