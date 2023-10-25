## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,761,242|94|
|using Array.includes (first item)|598,395,895|94|
|Using raw comparison|598,654,131|96|
|Using raw comparison (first item)|596,792,979|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":593761241.6874763,"samples":6},{"name":"using Array.includes (first item)","opsSec":598395895.3082687,"samples":6},{"name":"Using raw comparison","opsSec":598654130.900133,"samples":7},{"name":"Using raw comparison (first item)","opsSec":596792978.6920308,"samples":6}]}-->
