## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,797,738|65975464|
|Length = 10_000 - Array.at|83,240,010|41644276|
|Length = 1_000_000 - Array.at|96,760,883|48380452|
|Length = 100 - Array[length - 1]|91,095,922|45548399|
|Length = 10_000 - Array[length - 1]|86,583,634|43291825|
|Length = 1_000_000 - Array[length - 1]|97,859,278|48929661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:07:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131797738.17094652,"samples":65975464},{"name":"Length = 10_000 - Array.at","opsSec":83240010.25505972,"samples":41644276},{"name":"Length = 1_000_000 - Array.at","opsSec":96760883.68021442,"samples":48380452},{"name":"Length = 100 - Array[length - 1]","opsSec":91095922.38599403,"samples":45548399},{"name":"Length = 10_000 - Array[length - 1]","opsSec":86583634.06861134,"samples":43291825},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97859278.94191727,"samples":48929661}]}-->
