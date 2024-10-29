## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,593,112|60796640|
|Length = 10_000 - Array.at|96,470,985|48235503|
|Length = 1_000_000 - Array.at|92,711,686|46356883|
|Length = 100 - Array[length - 1]|93,153,977|46579116|
|Length = 10_000 - Array[length - 1]|93,809,778|46910354|
|Length = 1_000_000 - Array[length - 1]|93,768,710|46884365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121593112.20150515,"samples":60796640},{"name":"Length = 10_000 - Array.at","opsSec":96470985.54815106,"samples":48235503},{"name":"Length = 1_000_000 - Array.at","opsSec":92711686.1060339,"samples":46356883},{"name":"Length = 100 - Array[length - 1]","opsSec":93153977.28524147,"samples":46579116},{"name":"Length = 10_000 - Array[length - 1]","opsSec":93809778.59793468,"samples":46910354},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93768710.30857083,"samples":46884365}]}-->
