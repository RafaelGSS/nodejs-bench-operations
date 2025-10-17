## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|96,241,503|48120752|
|Length = 10_000 - Array.at|95,826,878|47913450|
|Length = 1_000_000 - Array.at|95,292,901|47646477|
|Length = 100 - Array[length - 1]|95,746,453|47875444|
|Length = 10_000 - Array[length - 1]|81,165,801|40582903|
|Length = 1_000_000 - Array[length - 1]|94,973,305|47486698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:24:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48120752,"opsSec":96241503.23006797},{"name":"Length = 10_000 - Array.at","samples":47913450,"opsSec":95826878.53477919},{"name":"Length = 1_000_000 - Array.at","samples":47646477,"opsSec":95292901.97007552},{"name":"Length = 100 - Array[length - 1]","samples":47875444,"opsSec":95746453.59874803},{"name":"Length = 10_000 - Array[length - 1]","samples":40582903,"opsSec":81165801.61704671},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47486698,"opsSec":94973305.58541308}]}-->
