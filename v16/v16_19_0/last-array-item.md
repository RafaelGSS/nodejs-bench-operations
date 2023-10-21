## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,014,448|96|
|Length = 10_000 - Array.at|18,925,294|96|
|Length = 1_000_000 - Array.at|18,674,464|97|
|Length = 100 - Array[length - 1]|593,134,150|95|
|Length = 10_000 - Array[length - 1]|592,609,043|95|
|Length = 1_000_000 - Array[length - 1]|591,606,163|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19014448.062881827,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":18925294.082451656,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":18674464.4596521,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":593134150.066736,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":592609042.5641743,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":591606162.6301305,"samples":8}]}-->
