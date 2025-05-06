## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|70,373,555|35205350|
|Using dot notation|65,567,148|32790602|
|Using define property (writable)|4,380,990|2190656|
|Using define property initialized (writable)|5,847,392|2923698|
|Using define property (getter)|2,168,420|1084225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":35205350,"opsSec":70373555.00795437},{"name":"Using dot notation","samples":32790602,"opsSec":65567148.763722405},{"name":"Using define property (writable)","samples":2190656,"opsSec":4380990.890891661},{"name":"Using define property initialized (writable)","samples":2923698,"opsSec":5847392.994440001},{"name":"Using define property (getter)","samples":1084225,"opsSec":2168420.257947742}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.137ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.297ms
array.push|1,000,000|36.94ms
new Array(length)|1,000,000|8.365ms
array.push|100,000,000|1,916.961ms
new Array(length)|100,000,000|4,821.271ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.237ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|5.096ms
array.push|100,000,000|2,668.586ms
new Array(length)|100,000,000|4,442.547ms
