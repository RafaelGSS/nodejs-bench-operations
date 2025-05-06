## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,786,501|46909199|
|Length = 10_000 - Array.at|93,512,201|46762882|
|Length = 1_000_000 - Array.at|95,130,738|47565416|
|Length = 100 - Array[length - 1]|91,831,196|45915985|
|Length = 10_000 - Array[length - 1]|93,066,778|46537429|
|Length = 1_000_000 - Array[length - 1]|93,471,142|46744743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46909199,"opsSec":93786501.77346586},{"name":"Length = 10_000 - Array.at","samples":46762882,"opsSec":93512201.92535475},{"name":"Length = 1_000_000 - Array.at","samples":47565416,"opsSec":95130738.77187599},{"name":"Length = 100 - Array[length - 1]","samples":45915985,"opsSec":91831196.04667974},{"name":"Length = 10_000 - Array[length - 1]","samples":46537429,"opsSec":93066778.12845644},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46744743,"opsSec":93471142.66213712}]}-->
