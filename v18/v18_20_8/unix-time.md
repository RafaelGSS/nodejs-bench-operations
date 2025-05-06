## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,870,433|4935234|
|Date.now()|19,212,194|9607950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:31:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4935234,"opsSec":9870433.789076488},{"name":"Date.now()","samples":9607950,"opsSec":19212194.351953395}]}-->
