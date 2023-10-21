## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,726,721|96|
|Length = 10_000 - Array.at|600,551,342|98|
|Length = 1_000_000 - Array.at|599,687,836|96|
|Length = 100 - Array[length - 1]|598,538,731|99|
|Length = 10_000 - Array[length - 1]|598,238,992|97|
|Length = 1_000_000 - Array[length - 1]|595,366,612|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594726720.8303853,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":600551341.89811,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":599687836.452827,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":598538731.3701419,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":598238991.7510219,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":595366612.2985417,"samples":7}]}-->
