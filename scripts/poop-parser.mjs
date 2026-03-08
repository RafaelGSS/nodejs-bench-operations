export function parsePoop(output) {
  const lines = output.trim().split('\n');
  const results = [];
  let currentBenchmark = null;
  
  for (const line of lines) {
    const benchmarkMatch = line.match(/^Benchmark \d+ \((\d+) runs?\): (.+)$/);
    if (benchmarkMatch) {
      if (currentBenchmark) results.push(currentBenchmark);
      currentBenchmark = {
        runs: parseInt(benchmarkMatch[1], 10),
        command: benchmarkMatch[2],
        metrics: {}
      };
      continue;
    }
    
    const metricMatch = line.match(
      /^\s+(\w+)\s+([\d.]+\s*\w*)\s+[±+-]+\s+([\d.]+\s*\w*)\s+([\d.]+\s*\w*)\s+[…\.]+\s+([\d.]+\s*\w*)\s+(\d+)\s*\(\s*(\d+)%\)/
    );
    
    if (metricMatch && currentBenchmark) {
      const [, name, mean, std, min, max, outliers, outlierPercent] = metricMatch;
      currentBenchmark.metrics[name.trim()] = {
        mean: mean.trim(), std: std.trim(), min: min.trim(), max: max.trim(),
        outliers: parseInt(outliers, 10), outlierPercent: parseInt(outlierPercent, 10)
      };
    }
  }
  if (currentBenchmark) results.push(currentBenchmark);
  return results;
}

export function poopToMarkdown(results, includeJson = false) {
  let markdown = '## Metrics\n\n';
  for (const result of results) {
    markdown += `### \`${result.command}\`\n\n`;
    markdown += `> Runs: ${result.runs}\n\n`;
    markdown += '| metric | mean | std | min | max | outliers (%) |\n';
    markdown += '|--------|------|-----|-----|-----|-------------|\n';
    for (const [metricName, data] of Object.entries(result.metrics)) {
      markdown += `| ${metricName} | ${data.mean} | ${data.std} | ${data.min} | ${data.max} | ${data.outliers} (${data.outlierPercent}%) |\n`;
    }
    markdown += '\n';
  }
  
  if (includeJson) {
    markdown += `<!--\n${JSON.stringify({ type: 'poop-metrics', benchmarks: results })}\n-->\n`;
  }
  
  return markdown;
}

export function poopToHiddenJson(results) {
  return `<!--\n${JSON.stringify({ type: 'poop-metrics', benchmarks: results })}\n-->`;
}
