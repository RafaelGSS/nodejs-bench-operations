## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,315,678|1657841|
|Using delete property (proto: null)|17,777,804|8888907|
|Using delete property (cached proto: null)|3,356,394|1678198|
|Using undefined assignment|85,640,612|42825086|
|Using undefined assignment (proto: null)|20,481,181|10240594|
|Using undefined property (cached proto: null)|84,075,667|42049019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1657841,"opsSec":3315678.71747807},{"name":"Using delete property (proto: null)","samples":8888907,"opsSec":17777804.11554091},{"name":"Using delete property (cached proto: null)","samples":1678198,"opsSec":3356394.2345366324},{"name":"Using undefined assignment","samples":42825086,"opsSec":85640612.28101352},{"name":"Using undefined assignment (proto: null)","samples":10240594,"opsSec":20481181.118323144},{"name":"Using undefined property (cached proto: null)","samples":42049019,"opsSec":84075667.31459227}]}-->
