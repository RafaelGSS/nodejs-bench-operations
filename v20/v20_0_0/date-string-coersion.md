## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,078,362|539225|
|Using brackets {}|1,066,471|533333|
|Using '' + |1,061,075|530539|
|Using date.toString()|1,166,827|583426|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":539225,"opsSec":1078362.7712354348},{"name":"Using brackets {}","samples":533333,"opsSec":1066471.1813104828},{"name":"Using '' + ","samples":530539,"opsSec":1061075.971222743},{"name":"Using date.toString()","samples":583426,"opsSec":1166827.568964361}]}-->
