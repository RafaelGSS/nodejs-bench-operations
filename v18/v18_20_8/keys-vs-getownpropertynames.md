## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,883,462|23441871|
|Using Object.getOwnPropertyNames()|47,344,113|23675580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23441871,"opsSec":46883462.574563056},{"name":"Using Object.getOwnPropertyNames()","samples":23675580,"opsSec":47344113.491524376}]}-->
