## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|983,261|94|
|Using brackets {}|954,619|98|
|Using '' + |1,007,586|98|
|Using date.toString()|1,107,016|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:22:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":983260.7428283982,"samples":5},{"name":"Using brackets {}","opsSec":954619.2715266648,"samples":4},{"name":"Using '' + ","opsSec":1007585.5381267281,"samples":7},{"name":"Using date.toString()","opsSec":1107015.6673826308,"samples":5}]}-->
