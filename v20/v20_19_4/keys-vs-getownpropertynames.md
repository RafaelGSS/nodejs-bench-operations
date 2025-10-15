## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,851,652|21447917|
|Using Object.getOwnPropertyNames()|47,490,669|23755855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:41:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21447917,"opsSec":42851652.061252154},{"name":"Using Object.getOwnPropertyNames()","samples":23755855,"opsSec":47490669.63874192}]}-->
