## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,997,308|1998993|
|Using replaceAll()|3,107,923|1553963|
|Using replaceAll(//g)|3,454,443|1727604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:27:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1998993,"opsSec":3997308.751967389},{"name":"Using replaceAll()","samples":1553963,"opsSec":3107923.961201881},{"name":"Using replaceAll(//g)","samples":1727604,"opsSec":3454443.8148481664}]}-->
