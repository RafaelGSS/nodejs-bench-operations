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

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.119ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.3ms
array.push|1,000,000|38.049ms
new Array(length)|1,000,000|9.295ms
array.push|100,000,000|1,955.267ms
new Array(length)|100,000,000|4,863.588ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.232ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|24.928ms
new Array(length)|1,000,000|5.159ms
array.push|100,000,000|2,702.877ms
new Array(length)|100,000,000|4,482.771ms
