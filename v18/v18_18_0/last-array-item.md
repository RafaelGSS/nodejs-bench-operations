## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,557,598|95|
|Length = 10_000 - Array.at|18,618,662|96|
|Length = 1_000_000 - Array.at|18,630,253|96|
|Length = 100 - Array[length - 1]|589,128,315|98|
|Length = 10_000 - Array[length - 1]|589,124,982|95|
|Length = 1_000_000 - Array[length - 1]|589,519,827|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18557598.351042245,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":18618661.608132984,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":18630253.018077005,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":589128314.9421817,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589124982.162378,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":589519827.2884185,"samples":6}]}-->
