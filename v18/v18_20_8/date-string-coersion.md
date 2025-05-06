## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,024,197|512141|
|Using brackets {}|1,029,848|515043|
|Using '' + |1,005,547|502774|
|Using date.toString()|1,143,281|571650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":512141,"opsSec":1024197.950219413},{"name":"Using brackets {}","samples":515043,"opsSec":1029848.4922213298},{"name":"Using '' + ","samples":502774,"opsSec":1005547.5716367345},{"name":"Using date.toString()","samples":571650,"opsSec":1143281.0192485184}]}-->
