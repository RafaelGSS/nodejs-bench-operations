## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|850,117,172|99|
|Length = 10_000 - Array.at|851,607,353|101|
|Length = 1_000_000 - Array.at|848,338,536|100|
|Length = 100 - Array[length - 1]|853,653,948|95|
|Length = 10_000 - Array[length - 1]|854,217,384|97|
|Length = 1_000_000 - Array[length - 1]|854,502,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:38:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":850117171.8332556,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":851607353.4236898,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":848338535.9548234,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":853653947.5620439,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":854217383.69676,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":854502798.8665735,"samples":6}]}-->
