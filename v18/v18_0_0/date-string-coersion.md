## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|898,367|449184|
|Using brackets {}|911,241|455621|
|Using '' + |910,482|455242|
|Using date.toString()|1,016,379|508190|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":898367.0948005144,"samples":449184},{"name":"Using brackets {}","opsSec":911241.642843173,"samples":455621},{"name":"Using '' + ","opsSec":910482.4522019635,"samples":455242},{"name":"Using date.toString()","opsSec":1016379.9272072383,"samples":508190}]}-->
