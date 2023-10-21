## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|597,199,429|99|
|Using backtick (`)|592,041,808|96|
|Using array.join|8,020,019|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":597199429.47407,"samples":7},{"name":"Using backtick (`)","opsSec":592041807.9066648,"samples":9},{"name":"Using array.join","opsSec":8020019.47264333,"samples":6}]}-->
