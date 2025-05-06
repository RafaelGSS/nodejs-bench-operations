## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,270,395|37636389|
|Using dot notation|65,193,224|32597514|
|Using define property (writable)|4,510,374|2255552|
|Using define property initialized (writable)|5,488,271|2744151|
|Using define property (getter)|2,088,531|1053106|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37636389,"opsSec":75270395.69197635},{"name":"Using dot notation","samples":32597514,"opsSec":65193224.49463757},{"name":"Using define property (writable)","samples":2255552,"opsSec":4510374.699473344},{"name":"Using define property initialized (writable)","samples":2744151,"opsSec":5488271.309586837},{"name":"Using define property (getter)","samples":1053106,"opsSec":2088531.7599475938}]}-->
