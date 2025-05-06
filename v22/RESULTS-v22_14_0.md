## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|66,389,257|33264271|
|Using dot notation|61,178,162|30877182|
|Using define property (writable)|4,944,868|2472436|
|Using define property initialized (writable)|6,662,817|3331501|
|Using define property (getter)|2,119,399|1060347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":33264271,"opsSec":66389257.60310571},{"name":"Using dot notation","samples":30877182,"opsSec":61178162.6143821},{"name":"Using define property (writable)","samples":2472436,"opsSec":4944868.597930404},{"name":"Using define property initialized (writable)","samples":3331501,"opsSec":6662817.093500021},{"name":"Using define property (getter)","samples":1060347,"opsSec":2119399.9749125172}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.135ms
array.push|1,000,000|34.315ms
new Array(length)|1,000,000|6.886ms
array.push|100,000,000|1,996.486ms
new Array(length)|100,000,000|4,342.785ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.019ms
new Array(length)|100|0.015ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|16.257ms
new Array(length)|10,000|5.241ms
array.push|1,000,000|183.209ms
new Array(length)|1,000,000|9.218ms
array.push|100,000,000|2,145.78ms
new Array(length)|100,000,000|4,980.258ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|262|132|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:09:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":132,"opsSec":262.20490380020897},{"name":"Array.from","samples":12,"opsSec":23.854311035773186}]}-->
