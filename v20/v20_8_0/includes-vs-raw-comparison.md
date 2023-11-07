## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|850,808,372|98|
|using Array.includes (first item)|853,312,250|94|
|Using raw comparison|854,099,059|96|
|Using raw comparison (first item)|852,743,586|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:18:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":850808372.2031327,"samples":6},{"name":"using Array.includes (first item)","opsSec":853312249.8017124,"samples":6},{"name":"Using raw comparison","opsSec":854099058.942427,"samples":8},{"name":"Using raw comparison (first item)","opsSec":852743586.2247579,"samples":7}]}-->
