## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,277|684639|
|fromUnixToISOString(new Date())|1,901,257|950629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369277.7726567136,"samples":684639},{"name":"fromUnixToISOString(new Date())","opsSec":1901257.0420141327,"samples":950629}]}-->
