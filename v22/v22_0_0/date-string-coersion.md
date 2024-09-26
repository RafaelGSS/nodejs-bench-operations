## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,486|506791|
|Using brackets {}|980,789|490539|
|Using '' + |985,641|493241|
|Using date.toString()|1,133,255|566675|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:11:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1013486.3045961474,"samples":506791},{"name":"Using brackets {}","opsSec":980789.0516990571,"samples":490539},{"name":"Using '' + ","opsSec":985641.4095228682,"samples":493241},{"name":"Using date.toString()","opsSec":1133255.8287071462,"samples":566675}]}-->
