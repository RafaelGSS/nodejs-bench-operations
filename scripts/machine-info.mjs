import os from 'node:os';

const machineInfo = `${os.platform()} ${os.arch()} | ${os.cpus().length} vCPUs | ${(os.totalmem() / (1024 ** 3)).toFixed(1)}GB Mem`

const writter = process.stdout

writter.write('\n\n')
writter.write('<details>\n')
writter.write('<summary>Environment</summary>')
writter.write(`\n
* __Machine:__ ${machineInfo}
* __Run:__ ${new Date()}
`);
writter.write('</details>')
writter.write('\n\n')
