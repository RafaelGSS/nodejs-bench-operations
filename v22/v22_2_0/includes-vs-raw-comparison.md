## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,745,057|7372529|
|using Array.includes (first item)|15,182,931|7591466|
|Using raw comparison|16,152,475|8076238|
|Using raw comparison (first item)|16,041,805|8020903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:21:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"using Array.includes","opsSec":14745057.439678483,"samples":7372529},{"name":"using Array.includes (first item)","opsSec":15182931.362314956,"samples":7591466},{"name":"Using raw comparison","opsSec":16152475.095464675,"samples":8076238},{"name":"Using raw comparison (first item)","opsSec":16041805.999994399,"samples":8020903}]}-->
