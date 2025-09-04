## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,658,228|45329678|
|Length = 10_000 - Array.at|89,754,687|44879271|
|Length = 1_000_000 - Array.at|92,380,372|46204293|
|Length = 100 - Array[length - 1]|91,333,835|46017192|
|Length = 10_000 - Array[length - 1]|91,939,826|45980502|
|Length = 1_000_000 - Array[length - 1]|92,814,694|46407356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45329678,"opsSec":90658228.75558364},{"name":"Length = 10_000 - Array.at","samples":44879271,"opsSec":89754687.75419845},{"name":"Length = 1_000_000 - Array.at","samples":46204293,"opsSec":92380372.47996238},{"name":"Length = 100 - Array[length - 1]","samples":46017192,"opsSec":91333835.76094939},{"name":"Length = 10_000 - Array[length - 1]","samples":45980502,"opsSec":91939826.76418279},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46407356,"opsSec":92814694.17957872}]}-->
