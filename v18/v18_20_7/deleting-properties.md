## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,285,640|1642821|
|Using delete property (proto: null)|19,189,902|9595261|
|Using delete property (cached proto: null)|3,339,090|1669546|
|Using undefined assignment|84,162,553|42081284|
|Using undefined assignment (proto: null)|20,755,245|10380724|
|Using undefined property (cached proto: null)|85,507,523|42753806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1642821,"opsSec":3285640.508319209},{"name":"Using delete property (proto: null)","samples":9595261,"opsSec":19189902.549945686},{"name":"Using delete property (cached proto: null)","samples":1669546,"opsSec":3339090.2837075945},{"name":"Using undefined assignment","samples":42081284,"opsSec":84162553.01906556},{"name":"Using undefined assignment (proto: null)","samples":10380724,"opsSec":20755245.170449343},{"name":"Using undefined property (cached proto: null)","samples":42753806,"opsSec":85507523.41420574}]}-->
