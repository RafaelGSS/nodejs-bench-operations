## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|848,073,319|93|
|Length = 10_000 - Array.at|852,262,887|96|
|Length = 1_000_000 - Array.at|851,842,894|99|
|Length = 100 - Array[length - 1]|851,106,572|98|
|Length = 10_000 - Array[length - 1]|850,973,537|97|
|Length = 1_000_000 - Array[length - 1]|852,074,207|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:40:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":848073319.1115717,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":852262886.7064753,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":851842894.0919083,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":851106572.3805416,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":850973536.6115258,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":852074206.8342013,"samples":6}]}-->
