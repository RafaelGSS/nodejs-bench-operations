## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,521,495|91|
|fromUnixToISOString(new Date())|2,121,397|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2521495.291790346,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2121396.5637922287,"samples":7}]}-->
