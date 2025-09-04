## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,602,675|37805220|
|Using dot notation|60,700,561|30431549|
|Using define property (writable)|3,940,212|1970257|
|Using define property initialized (writable)|5,546,922|2773517|
|Using define property (getter)|2,030,597|1023880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:09:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":37805220,"opsSec":75602675.00045605},{"name":"Using dot notation","samples":30431549,"opsSec":60700561.320962094},{"name":"Using define property (writable)","samples":1970257,"opsSec":3940212.1324681076},{"name":"Using define property initialized (writable)","samples":2773517,"opsSec":5546922.828572669},{"name":"Using define property (getter)","samples":1023880,"opsSec":2030597.5962375551}]}-->
