## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|94,676,427|47370133|
|Using dot notation|64,105,980|32059883|
|Using define property (writable)|4,905,356|2452680|
|Using define property initialized (writable)|6,933,641|3466828|
|Using define property (getter)|2,364,371|1183551|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":47370133,"opsSec":94676427.95686296},{"name":"Using dot notation","samples":32059883,"opsSec":64105980.008999065},{"name":"Using define property (writable)","samples":2452680,"opsSec":4905356.360225581},{"name":"Using define property initialized (writable)","samples":3466828,"opsSec":6933641.536423755},{"name":"Using define property (getter)","samples":1183551,"opsSec":2364371.6189257214}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|34.192ms
new Array(length)|1,000,000|6.943ms
array.push|10,000,000|265.447ms
new Array(length)|10,000,000|68.42ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.186ms
array.push|1,000,000|21.636ms
new Array(length)|1,000,000|12.397ms
array.push|10,000,000|231.148ms
new Array(length)|10,000,000|70.001ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|164|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:23:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":164,"opsSec":326.1328295424289},{"name":"Array.from","samples":12,"opsSec":23.88372884907726}]}-->
