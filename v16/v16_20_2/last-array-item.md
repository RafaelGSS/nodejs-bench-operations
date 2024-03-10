## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,888,198|93|
|Length = 10_000 - Array.at|22,990,109|97|
|Length = 1_000_000 - Array.at|23,066,444|96|
|Length = 100 - Array[length - 1]|817,603,597|94|
|Length = 10_000 - Array[length - 1]|816,747,362|99|
|Length = 1_000_000 - Array[length - 1]|817,060,602|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22888197.877712585,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":22990108.901301827,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23066444.024379693,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":817603596.89857,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":816747361.5270367,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":817060601.9547316,"samples":7}]}-->
