## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,605,016|45436220|
|Length = 10_000 - Array.at|80,809,795|40414787|
|Length = 1_000_000 - Array.at|89,001,850|44501808|
|Length = 100 - Array[length - 1]|91,409,698|45705777|
|Length = 10_000 - Array[length - 1]|91,400,097|45760118|
|Length = 1_000_000 - Array[length - 1]|90,722,364|45361204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45436220,"opsSec":90605016.21407361},{"name":"Length = 10_000 - Array.at","samples":40414787,"opsSec":80809795.6408973},{"name":"Length = 1_000_000 - Array.at","samples":44501808,"opsSec":89001850.91529265},{"name":"Length = 100 - Array[length - 1]","samples":45705777,"opsSec":91409698.56593852},{"name":"Length = 10_000 - Array[length - 1]","samples":45760118,"opsSec":91400097.70077993},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45361204,"opsSec":90722364.6347097}]}-->
