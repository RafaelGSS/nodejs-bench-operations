## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|847,843,638|98|
|Length = 10_000 - Array.at|850,894,155|96|
|Length = 1_000_000 - Array.at|850,301,338|96|
|Length = 100 - Array[length - 1]|852,497,145|101|
|Length = 10_000 - Array[length - 1]|854,689,460|96|
|Length = 1_000_000 - Array[length - 1]|853,878,402|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":847843638.4843211,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":850894155.4220963,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":850301337.6231493,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":852497144.787347,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":854689459.7952449,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":853878402.103459,"samples":8}]}-->
