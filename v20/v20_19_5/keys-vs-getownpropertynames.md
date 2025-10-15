## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,023,060|21513868|
|Using Object.getOwnPropertyNames()|46,681,245|23343814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21513868,"opsSec":43023060.59795869},{"name":"Using Object.getOwnPropertyNames()","samples":23343814,"opsSec":46681245.08663432}]}-->
