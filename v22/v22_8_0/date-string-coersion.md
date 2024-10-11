## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,594|521798|
|Using brackets {}|1,087,102|543552|
|Using '' + |1,092,578|546290|
|Using date.toString()|1,186,040|593021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1043594.8562200374,"samples":521798},{"name":"Using brackets {}","opsSec":1087102.1736683482,"samples":543552},{"name":"Using '' + ","opsSec":1092578.5556111496,"samples":546290},{"name":"Using date.toString()","opsSec":1186040.088103378,"samples":593021}]}-->
