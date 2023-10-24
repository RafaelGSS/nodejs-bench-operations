## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|587,321,522|94|
|using Array.includes (first item)|585,314,163|95|
|Using raw comparison|574,429,385|93|
|Using raw comparison (first item)|587,417,043|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":587321521.5237931,"samples":6},{"name":"using Array.includes (first item)","opsSec":585314162.5812323,"samples":7},{"name":"Using raw comparison","opsSec":574429385.4509808,"samples":8},{"name":"Using raw comparison (first item)","opsSec":587417042.9855671,"samples":7}]}-->
