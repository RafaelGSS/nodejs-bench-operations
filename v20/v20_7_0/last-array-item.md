## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,694,844|99|
|Length = 10_000 - Array.at|714,692,180|97|
|Length = 1_000_000 - Array.at|715,956,756|95|
|Length = 100 - Array[length - 1]|716,193,660|96|
|Length = 10_000 - Array[length - 1]|715,381,097|95|
|Length = 1_000_000 - Array[length - 1]|716,563,552|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":713694844.1357394,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":714692180.0335612,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":715956755.9308528,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":716193659.9812897,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":715381097.211388,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":716563551.9868115,"samples":7}]}-->
