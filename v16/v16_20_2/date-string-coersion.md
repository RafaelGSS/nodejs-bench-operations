## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,028|96|
|Using brackets {}|1,076,275|98|
|Using '' + |1,091,060|96|
|Using date.toString()|1,170,346|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1059028.2941930725,"samples":6},{"name":"Using brackets {}","opsSec":1076275.2214482091,"samples":8},{"name":"Using '' + ","opsSec":1091060.201654129,"samples":6},{"name":"Using date.toString()","opsSec":1170345.8504448133,"samples":5}]}-->
