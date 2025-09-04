## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|94,676,427|47370133|
|Using dot notation|64,105,980|32059883|
|Using define property (writable)|4,905,356|2452680|
|Using define property initialized (writable)|6,933,641|3466828|
|Using define property (getter)|2,364,371|1183551|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":47370133,"opsSec":94676427.95686296},{"name":"Using dot notation","samples":32059883,"opsSec":64105980.008999065},{"name":"Using define property (writable)","samples":2452680,"opsSec":4905356.360225581},{"name":"Using define property initialized (writable)","samples":3466828,"opsSec":6933641.536423755},{"name":"Using define property (getter)","samples":1183551,"opsSec":2364371.6189257214}]}-->
