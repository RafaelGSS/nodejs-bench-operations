## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|945,143|472572|
|Using brackets {}|961,671|480836|
|Using '' + |974,381|487191|
|Using date.toString()|1,039,496|519749|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:47:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":945143.0624173881,"samples":472572},{"name":"Using brackets {}","opsSec":961671.5634009958,"samples":480836},{"name":"Using '' + ","opsSec":974381.3783444931,"samples":487191},{"name":"Using date.toString()","opsSec":1039496.5571784094,"samples":519749}]}-->
