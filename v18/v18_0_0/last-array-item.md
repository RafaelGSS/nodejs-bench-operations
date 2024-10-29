## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,219,991|10722057|
|Length = 10_000 - Array.at|20,509,216|10254615|
|Length = 1_000_000 - Array.at|20,730,392|10365201|
|Length = 100 - Array[length - 1]|96,954,619|48487483|
|Length = 10_000 - Array[length - 1]|96,900,761|48451355|
|Length = 1_000_000 - Array[length - 1]|97,044,161|48538714|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":21219991.169427376,"samples":10722057},{"name":"Length = 10_000 - Array.at","opsSec":20509216.299843512,"samples":10254615},{"name":"Length = 1_000_000 - Array.at","opsSec":20730392.75424483,"samples":10365201},{"name":"Length = 100 - Array[length - 1]","opsSec":96954619.10363491,"samples":48487483},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96900761.13189211,"samples":48451355},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97044161.06749773,"samples":48538714}]}-->
