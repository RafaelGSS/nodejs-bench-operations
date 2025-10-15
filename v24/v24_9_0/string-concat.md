## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,885,189|47481732|
|Using backtick (`)|95,026,215|47513578|
|Using array.join|10,688,593|5345232|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:53:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47481732,"opsSec":94885189.60146055},{"name":"Using backtick (`)","samples":47513578,"opsSec":95026215.43051966},{"name":"Using array.join","samples":5345232,"opsSec":10688593.88086023}]}-->
