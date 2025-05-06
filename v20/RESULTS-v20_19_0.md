## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,518,344|37760908|
|Using dot notation|65,898,271|32950559|
|Using define property (writable)|4,409,409|2204710|
|Using define property initialized (writable)|5,890,074|2945568|
|Using define property (getter)|2,215,812|1108963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37760908,"opsSec":75518344.11964744},{"name":"Using dot notation","samples":32950559,"opsSec":65898271.721847795},{"name":"Using define property (writable)","samples":2204710,"opsSec":4409409.946545322},{"name":"Using define property initialized (writable)","samples":2945568,"opsSec":5890074.149212528},{"name":"Using define property (getter)","samples":1108963,"opsSec":2215812.947593664}]}-->
