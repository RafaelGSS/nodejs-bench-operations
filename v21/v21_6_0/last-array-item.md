## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|873,075,836|97|
|Length = 10_000 - Array.at|868,925,575|97|
|Length = 1_000_000 - Array.at|871,189,994|99|
|Length = 100 - Array[length - 1]|823,011,881|99|
|Length = 10_000 - Array[length - 1]|822,449,887|97|
|Length = 1_000_000 - Array[length - 1]|822,523,516|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":873075836.1404177,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":868925574.6931117,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":871189993.7957231,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":823011881.1318436,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":822449886.8308239,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822523516.1095618,"samples":7}]}-->
