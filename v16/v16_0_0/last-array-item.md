## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|707,509,017|96|
|Length = 10_000 - Array[length - 1]|706,626,125|96|
|Length = 1_000_000 - Array[length - 1]|705,700,147|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":0,"samples":0},{"name":"Length = 10_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 1_000_000 - Array.at","opsSec":0,"samples":0},{"name":"Length = 100 - Array[length - 1]","opsSec":707509016.5630956,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":706626124.8029162,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":705700146.8084501,"samples":10}]}-->
