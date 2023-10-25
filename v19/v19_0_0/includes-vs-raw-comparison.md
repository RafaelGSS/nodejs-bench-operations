## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,064,333|94|
|using Array.includes (first item)|587,980,881|95|
|Using raw comparison|589,642,645|96|
|Using raw comparison (first item)|588,871,066|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":588064333.1225121,"samples":9},{"name":"using Array.includes (first item)","opsSec":587980880.9495317,"samples":6},{"name":"Using raw comparison","opsSec":589642644.6378647,"samples":6},{"name":"Using raw comparison (first item)","opsSec":588871066.303892,"samples":7}]}-->
