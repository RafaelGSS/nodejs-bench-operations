## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,017,318|508707|
|Using brackets {}|993,233|496820|
|Using '' + |985,750|493589|
|Using date.toString()|1,148,418|574276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1017318.4351408398,"samples":508707},{"name":"Using brackets {}","opsSec":993233.064467623,"samples":496820},{"name":"Using '' + ","opsSec":985750.4086571712,"samples":493589},{"name":"Using date.toString()","opsSec":1148418.3332933513,"samples":574276}]}-->
