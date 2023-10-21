## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,920,185|94|
|Length = 10_000 - Array.at|599,486,561|98|
|Length = 1_000_000 - Array.at|599,692,856|93|
|Length = 100 - Array[length - 1]|595,586,179|93|
|Length = 10_000 - Array[length - 1]|595,566,727|96|
|Length = 1_000_000 - Array[length - 1]|593,957,139|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":599920185.1105475,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":599486561.1110871,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":599692856.2009872,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":595586179.1072974,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":595566726.9072315,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":593957139.4157964,"samples":5}]}-->
