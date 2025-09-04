## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,751,838|5876315|
|Date.now()|19,416,714|9708422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:58:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5876315,"opsSec":11751838.396165634},{"name":"Date.now()","samples":9708422,"opsSec":19416714.568180688}]}-->
