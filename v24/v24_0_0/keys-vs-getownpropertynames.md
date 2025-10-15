## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,573,377|23786699|
|Using Object.getOwnPropertyNames()|47,239,964|23621904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23786699,"opsSec":47573377.73374109},{"name":"Using Object.getOwnPropertyNames()","samples":23621904,"opsSec":47239964.83990042}]}-->
