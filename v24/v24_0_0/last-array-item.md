## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,259,086|47708276|
|Length = 10_000 - Array.at|93,627,918|46835695|
|Length = 1_000_000 - Array.at|93,807,051|46911259|
|Length = 100 - Array[length - 1]|93,427,776|46727352|
|Length = 10_000 - Array[length - 1]|93,151,686|46587852|
|Length = 1_000_000 - Array[length - 1]|92,861,000|46430982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47708276,"opsSec":95259086.8242977},{"name":"Length = 10_000 - Array.at","samples":46835695,"opsSec":93627918.18307592},{"name":"Length = 1_000_000 - Array.at","samples":46911259,"opsSec":93807051.84374842},{"name":"Length = 100 - Array[length - 1]","samples":46727352,"opsSec":93427776.43313201},{"name":"Length = 10_000 - Array[length - 1]","samples":46587852,"opsSec":93151686.51436263},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46430982,"opsSec":92861000.65997916}]}-->
