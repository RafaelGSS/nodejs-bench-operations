## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|130,836,624|65444153|
|Length = 10_000 - Array.at|90,473,452|45255582|
|Length = 1_000_000 - Array.at|95,964,565|47982404|
|Length = 100 - Array[length - 1]|96,277,513|48138764|
|Length = 10_000 - Array[length - 1]|96,081,711|48043102|
|Length = 1_000_000 - Array[length - 1]|96,155,505|48077759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:17:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":130836624.22506484,"samples":65444153},{"name":"Length = 10_000 - Array.at","opsSec":90473452.85538082,"samples":45255582},{"name":"Length = 1_000_000 - Array.at","opsSec":95964565.20965002,"samples":47982404},{"name":"Length = 100 - Array[length - 1]","opsSec":96277513.55837297,"samples":48138764},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96081711.98780115,"samples":48043102},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96155505.88440625,"samples":48077759}]}-->
