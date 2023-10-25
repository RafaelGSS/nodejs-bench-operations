## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,868,021|97|
|using Array.includes (first item)|714,072,489|94|
|Using raw comparison|713,837,617|95|
|Using raw comparison (first item)|713,094,270|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":711868020.5231025,"samples":6},{"name":"using Array.includes (first item)","opsSec":714072489.4685521,"samples":6},{"name":"Using raw comparison","opsSec":713837616.8029504,"samples":6},{"name":"Using raw comparison (first item)","opsSec":713094270.4065498,"samples":6}]}-->
