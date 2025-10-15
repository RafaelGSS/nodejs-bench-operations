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

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.021ms
new Array(length)|100|0.009ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|31.367ms
new Array(length)|1,000,000|7.662ms
array.push|10,000,000|256.697ms
new Array(length)|10,000,000|67.059ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.295ms
new Array(length)|10,000|0.196ms
array.push|1,000,000|23.077ms
new Array(length)|1,000,000|12.069ms
array.push|10,000,000|224.307ms
new Array(length)|10,000,000|67.689ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|151|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:57:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":299.5538248935819},{"name":"Array.from","samples":13,"opsSec":24.197684630027563}]}-->
