## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,929,195|36018614|
|Using dot notation|63,356,307|31684119|
|Using define property (writable)|4,497,471|2248738|
|Using define property initialized (writable)|5,963,578|2983463|
|Using define property (getter)|2,164,033|1082177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":36018614,"opsSec":71929195.81450549},{"name":"Using dot notation","samples":31684119,"opsSec":63356307.500447206},{"name":"Using define property (writable)","samples":2248738,"opsSec":4497471.808356274},{"name":"Using define property initialized (writable)","samples":2983463,"opsSec":5963578.440659591},{"name":"Using define property (getter)","samples":1082177,"opsSec":2164033.1344790845}]}-->
