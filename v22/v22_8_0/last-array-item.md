## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,688,129|61905711|
|Length = 10_000 - Array.at|96,615,151|48308520|
|Length = 1_000_000 - Array.at|97,434,391|48765481|
|Length = 100 - Array[length - 1]|97,367,682|48688874|
|Length = 10_000 - Array[length - 1]|97,175,810|48593623|
|Length = 1_000_000 - Array[length - 1]|95,312,261|47656140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123688129.17808278,"samples":61905711},{"name":"Length = 10_000 - Array.at","opsSec":96615151.75347413,"samples":48308520},{"name":"Length = 1_000_000 - Array.at","opsSec":97434391.46185285,"samples":48765481},{"name":"Length = 100 - Array[length - 1]","opsSec":97367682.32373674,"samples":48688874},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97175810.73929545,"samples":48593623},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95312261.12817231,"samples":47656140}]}-->
