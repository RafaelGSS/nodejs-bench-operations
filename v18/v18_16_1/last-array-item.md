## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,286,422|96|
|Length = 10_000 - Array.at|26,157,156|97|
|Length = 1_000_000 - Array.at|25,830,921|96|
|Length = 100 - Array[length - 1]|843,480,000|100|
|Length = 10_000 - Array[length - 1]|845,181,946|88|
|Length = 1_000_000 - Array[length - 1]|843,897,388|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:34:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27286422.06881249,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26157155.887965605,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":25830921.281906385,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":843479999.6754351,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845181945.9543424,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":843897388.0930139,"samples":7}]}-->
