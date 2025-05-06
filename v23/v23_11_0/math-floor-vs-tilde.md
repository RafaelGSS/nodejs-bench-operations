## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,403,228|47201631|
|~ (small)|93,442,004|46748040|
|Math.floor (long)|93,164,293|46750869|
|~ (long)|96,692,113|48346096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47201631,"opsSec":94403228.3924507},{"name":"~ (small)","samples":46748040,"opsSec":93442004.55131413},{"name":"Math.floor (long)","samples":46750869,"opsSec":93164293.38910152},{"name":"~ (long)","samples":48346096,"opsSec":96692113.48600386}]}-->
