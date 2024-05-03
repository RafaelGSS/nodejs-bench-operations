## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|115,462,392|93|
|using Array.includes (first item)|128,288,950|96|
|Using raw comparison|911,201,150|99|
|Using raw comparison (first item)|909,183,473|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:21:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":115462391.78169544,"samples":5},{"name":"using Array.includes (first item)","opsSec":128288950.45810592,"samples":6},{"name":"Using raw comparison","opsSec":911201150.1382265,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909183473.2602545,"samples":6}]}-->
