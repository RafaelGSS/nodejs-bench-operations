## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|937,903|468952|
|Using brackets {}|936,169|468085|
|Using '' + |939,471|469736|
|Using date.toString()|1,029,697|514849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:12:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":937903.8949544963,"samples":468952},{"name":"Using brackets {}","opsSec":936169.3091074189,"samples":468085},{"name":"Using '' + ","opsSec":939471.1995705592,"samples":469736},{"name":"Using date.toString()","opsSec":1029697.9546940145,"samples":514849}]}-->
