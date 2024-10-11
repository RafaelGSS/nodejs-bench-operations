## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|823,210|411608|
|Using brackets {}|935,620|467954|
|Using '' + |913,820|456911|
|Using date.toString()|1,174,972|587513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:17:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":823210.3313736581,"samples":411608},{"name":"Using brackets {}","opsSec":935620.1845188383,"samples":467954},{"name":"Using '' + ","opsSec":913820.6146479482,"samples":456911},{"name":"Using date.toString()","opsSec":1174972.2262210948,"samples":587513}]}-->
