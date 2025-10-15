## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|107,861,524|53993303|
|Using dot notation|79,568,169|39784201|
|Using define property (writable)|4,871,497|2435750|
|Using define property initialized (writable)|6,953,717|3476868|
|Using define property (getter)|2,470,401|1237214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:50:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53993303,"opsSec":107861524.59872214},{"name":"Using dot notation","samples":39784201,"opsSec":79568169.18353696},{"name":"Using define property (writable)","samples":2435750,"opsSec":4871497.320676474},{"name":"Using define property initialized (writable)","samples":3476868,"opsSec":6953717.4892040435},{"name":"Using define property (getter)","samples":1237214,"opsSec":2470401.255834595}]}-->
