## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|136,701,211|68350609|
|Using backtick (`)|98,384,466|49232334|
|Using array.join|10,366,621|5183312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":136701211.98514667,"samples":68350609},{"name":"Using backtick (`)","opsSec":98384466.75362284,"samples":49232334},{"name":"Using array.join","opsSec":10366621.59494379,"samples":5183312}]}-->
