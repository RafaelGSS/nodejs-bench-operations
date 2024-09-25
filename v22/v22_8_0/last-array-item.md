## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,422,998|7211500|
|Length = 10_000 - Array.at|14,249,008|7124505|
|Length = 1_000_000 - Array.at|15,055,205|7527603|
|Length = 100 - Array[length - 1]|15,124,091|7562046|
|Length = 10_000 - Array[length - 1]|14,430,418|7215210|
|Length = 1_000_000 - Array[length - 1]|14,976,832|7488417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:48:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14422998.15391973,"samples":7211500},{"name":"Length = 10_000 - Array.at","opsSec":14249008.689082256,"samples":7124505},{"name":"Length = 1_000_000 - Array.at","opsSec":15055205.187180985,"samples":7527603},{"name":"Length = 100 - Array[length - 1]","opsSec":15124091.606540525,"samples":7562046},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14430418.210650215,"samples":7215210},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14976832.292854125,"samples":7488417}]}-->
