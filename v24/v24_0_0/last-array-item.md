## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|94,589,972|47324148|
|Length = 10_000 - Array.at|93,329,085|46664551|
|Length = 1_000_000 - Array.at|87,189,704|43598579|
|Length = 100 - Array[length - 1]|87,722,841|43861428|
|Length = 10_000 - Array[length - 1]|92,941,941|46471003|
|Length = 1_000_000 - Array[length - 1]|90,704,008|45352013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47324148,"opsSec":94589972.57962717},{"name":"Length = 10_000 - Array.at","samples":46664551,"opsSec":93329085.01410653},{"name":"Length = 1_000_000 - Array.at","samples":43598579,"opsSec":87189704.84965004},{"name":"Length = 100 - Array[length - 1]","samples":43861428,"opsSec":87722841.96434529},{"name":"Length = 10_000 - Array[length - 1]","samples":46471003,"opsSec":92941941.8700601},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45352013,"opsSec":90704008.04060641}]}-->
