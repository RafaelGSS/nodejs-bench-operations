## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,484|547766|
|Using brackets {}|1,115,489|557746|
|Using '' + |1,120,756|560379|
|Using date.toString()|1,232,289|616146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:40:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":547766,"opsSec":1095484.0747626973},{"name":"Using brackets {}","samples":557746,"opsSec":1115489.8181019158},{"name":"Using '' + ","samples":560379,"opsSec":1120756.527325923},{"name":"Using date.toString()","samples":616146,"opsSec":1232289.1608057737}]}-->
