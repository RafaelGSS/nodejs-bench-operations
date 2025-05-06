## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,413,040|47210856|
|~ (small)|96,963,943|48481978|
|Math.floor (long)|97,375,128|48687579|
|~ (long)|89,281,159|44640603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47210856,"opsSec":94413040.53987858},{"name":"~ (small)","samples":48481978,"opsSec":96963943.58861522},{"name":"Math.floor (long)","samples":48687579,"opsSec":97375128.78746137},{"name":"~ (long)","samples":44640603,"opsSec":89281159.03811035}]}-->
