## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|908,375,301|97|
|using Array.includes (first item)|908,884,393|100|
|Using raw comparison|910,587,233|95|
|Using raw comparison (first item)|909,549,224|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:20:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":908375301.3370847,"samples":8},{"name":"using Array.includes (first item)","opsSec":908884393.0991156,"samples":9},{"name":"Using raw comparison","opsSec":910587232.9704052,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909549223.680567,"samples":6}]}-->
