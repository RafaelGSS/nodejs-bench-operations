import { createBenchmarkSuite } from '../common.js'
import { styleText } from 'node:util'
import ansiColors from 'ansi-colors'
import chalk from 'chalk'
import { red } from 'colorette'
import picocolors from 'picocolors'

const suite = createBenchmarkSuite('Style text')

suite
  .add('util.styleText(red, hello world)', function () {
    styleText('red', 'hello world');
  })
  .add('chalk.red(hello world)', function () {
    chalk.red('hello world')
  })
  .add('ansiColors.red(hello world)', function () {
    ansiColors.red('hello world')
  })
  .add('colorette.red(hello world)', function () {
    red('hello world')
  })
  .add('picocolors.red(hello world)', function () {
    picocolors.red('hello world')
  })
  .run()
