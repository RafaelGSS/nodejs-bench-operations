## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,335,465|13668047|
|Object.create({})|1,880,255|943237|
|new Function with empty prototype|78,518,050|39261926|
|Empty class|78,736,580|39392833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13668047,"opsSec":27335465.229628786},{"name":"Object.create({})","samples":943237,"opsSec":1880255.858497527},{"name":"new Function with empty prototype","samples":39261926,"opsSec":78518050.92936124},{"name":"Empty class","samples":39392833,"opsSec":78736580.35602076}]}-->
