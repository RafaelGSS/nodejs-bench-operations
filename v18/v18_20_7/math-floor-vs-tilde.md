## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|100,482,835|50241430|
|~ (small)|107,075,719|53542174|
|Math.floor (long)|103,508,552|51754291|
|~ (long)|106,537,240|53268629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50241430,"opsSec":100482835.28122252},{"name":"~ (small)","samples":53542174,"opsSec":107075719.41022705},{"name":"Math.floor (long)","samples":51754291,"opsSec":103508552.60357106},{"name":"~ (long)","samples":53268629,"opsSec":106537240.52789254}]}-->
