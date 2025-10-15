## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,340,289|45120950|
|~ (small)|93,776,633|46896685|
|Math.floor (long)|94,110,871|47067583|
|~ (long)|92,663,533|46332799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:53:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45120950,"opsSec":89340289.23658144},{"name":"~ (small)","samples":46896685,"opsSec":93776633.87170617},{"name":"Math.floor (long)","samples":47067583,"opsSec":94110871.4667526},{"name":"~ (long)","samples":46332799,"opsSec":92663533.45647459}]}-->
