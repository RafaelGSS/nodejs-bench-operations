## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|118,999,641|59499840|
|Length = 10_000 - Array.at|96,186,065|48093762|
|Length = 1_000_000 - Array.at|96,073,954|48036996|
|Length = 100 - Array[length - 1]|95,613,752|47806887|
|Length = 10_000 - Array[length - 1]|93,740,967|46871010|
|Length = 1_000_000 - Array[length - 1]|95,602,402|47801214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":118999641.92011458,"samples":59499840},{"name":"Length = 10_000 - Array.at","opsSec":96186065.62687297,"samples":48093762},{"name":"Length = 1_000_000 - Array.at","opsSec":96073954.53115773,"samples":48036996},{"name":"Length = 100 - Array[length - 1]","opsSec":95613752.58251941,"samples":47806887},{"name":"Length = 10_000 - Array[length - 1]","opsSec":93740967.47641718,"samples":46871010},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95602402.56976092,"samples":47801214}]}-->
