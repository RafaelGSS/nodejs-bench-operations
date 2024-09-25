## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,455,103|6727552|
|using Array.includes (first item)|13,962,563|6981282|
|Using raw comparison|14,239,006|7119504|
|Using raw comparison (first item)|14,313,418|7156710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13455103.703969996,"samples":6727552},{"name":"using Array.includes (first item)","opsSec":13962563.245892715,"samples":6981282},{"name":"Using raw comparison","opsSec":14239006.80376679,"samples":7119504},{"name":"Using raw comparison (first item)","opsSec":14313418.797509637,"samples":7156710}]}-->
