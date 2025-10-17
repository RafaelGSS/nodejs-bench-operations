## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|940,599|470323|
|Using brackets {}|990,278|495180|
|Using '' + |937,289|468645|
|Using date.toString()|1,016,087|508044|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":470323,"opsSec":940599.8090245784},{"name":"Using brackets {}","samples":495180,"opsSec":990278.1931184665},{"name":"Using '' + ","samples":468645,"opsSec":937289.5313552342},{"name":"Using date.toString()","samples":508044,"opsSec":1016087.1546154873}]}-->
