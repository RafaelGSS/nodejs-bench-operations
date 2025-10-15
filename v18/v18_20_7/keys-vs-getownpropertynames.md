## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|21,992,269|10996136|
|Using Object.getOwnPropertyNames()|21,510,602|10755313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":10996136,"opsSec":21992269.36092768},{"name":"Using Object.getOwnPropertyNames()","samples":10755313,"opsSec":21510602.81157017}]}-->
