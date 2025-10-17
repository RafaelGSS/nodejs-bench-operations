## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|96,804,557|48402289|
|Length = 10_000 - Array.at|95,542,706|48328953|
|Length = 1_000_000 - Array.at|95,277,330|47638712|
|Length = 100 - Array[length - 1]|93,778,242|46889128|
|Length = 10_000 - Array[length - 1]|96,187,546|48093840|
|Length = 1_000_000 - Array[length - 1]|93,585,351|46792687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48402289,"opsSec":96804557.47743382},{"name":"Length = 10_000 - Array.at","samples":48328953,"opsSec":95542706.87533274},{"name":"Length = 1_000_000 - Array.at","samples":47638712,"opsSec":95277330.05655256},{"name":"Length = 100 - Array[length - 1]","samples":46889128,"opsSec":93778242.30837661},{"name":"Length = 10_000 - Array[length - 1]","samples":48093840,"opsSec":96187546.10693583},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46792687,"opsSec":93585351.35234497}]}-->
