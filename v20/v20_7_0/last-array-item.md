## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,840,778|94|
|Length = 10_000 - Array.at|851,459,451|98|
|Length = 1_000_000 - Array.at|851,943,368|98|
|Length = 100 - Array[length - 1]|851,285,877|100|
|Length = 10_000 - Array[length - 1]|853,406,353|99|
|Length = 1_000_000 - Array[length - 1]|852,552,713|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:39:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":848840778.0274541,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":851459450.8816991,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":851943367.8012794,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":851285876.997601,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":853406353.3262714,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":852552712.9809711,"samples":7}]}-->
