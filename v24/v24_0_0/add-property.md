## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|99,447,983|49724198|
|Using dot notation|72,191,817|36142558|
|Using define property (writable)|5,051,734|2525869|
|Using define property initialized (writable)|6,985,415|3511132|
|Using define property (getter)|2,361,297|1180678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":49724198,"opsSec":99447983.4897645},{"name":"Using dot notation","samples":36142558,"opsSec":72191817.46086809},{"name":"Using define property (writable)","samples":2525869,"opsSec":5051734.746682823},{"name":"Using define property initialized (writable)","samples":3511132,"opsSec":6985415.444550913},{"name":"Using define property (getter)","samples":1180678,"opsSec":2361297.3264840315}]}-->
