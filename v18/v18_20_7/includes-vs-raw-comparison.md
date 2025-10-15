## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,849,044|36425911|
|using Array.includes (first item)|84,256,266|42128145|
|Using raw comparison|93,162,501|46584038|
|Using raw comparison (first item)|104,537,678|52268848|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:38:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36425911,"opsSec":72849044.41163468},{"name":"using Array.includes (first item)","samples":42128145,"opsSec":84256266.5767579},{"name":"Using raw comparison","samples":46584038,"opsSec":93162501.15593083},{"name":"Using raw comparison (first item)","samples":52268848,"opsSec":104537678.64674535}]}-->
