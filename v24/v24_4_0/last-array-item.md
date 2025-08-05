## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,968,762|45485137|
|Length = 10_000 - Array.at|94,411,369|47249748|
|Length = 1_000_000 - Array.at|96,884,458|48442249|
|Length = 100 - Array[length - 1]|94,762,844|47401705|
|Length = 10_000 - Array[length - 1]|90,462,524|45231291|
|Length = 1_000_000 - Array[length - 1]|94,400,328|47222922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:28:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45485137,"opsSec":90968762.64497742},{"name":"Length = 10_000 - Array.at","samples":47249748,"opsSec":94411369.78392534},{"name":"Length = 1_000_000 - Array.at","samples":48442249,"opsSec":96884458.47114094},{"name":"Length = 100 - Array[length - 1]","samples":47401705,"opsSec":94762844.49010774},{"name":"Length = 10_000 - Array[length - 1]","samples":45231291,"opsSec":90462524.28490952},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47222922,"opsSec":94400328.8814298}]}-->
