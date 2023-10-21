## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,446,195|93|
|using Array.includes (first item)|710,208,619|91|
|Using raw comparison|714,294,583|97|
|Using raw comparison (first item)|712,576,326|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":712446195.2557806,"samples":7},{"name":"using Array.includes (first item)","opsSec":710208618.697717,"samples":8},{"name":"Using raw comparison","opsSec":714294582.9468395,"samples":7},{"name":"Using raw comparison (first item)","opsSec":712576326.0190222,"samples":9}]}-->
