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

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,534|2279|
|new Blob (1024)|617|314|
|text (128)|4,411|2206|
|text (1024)|553|277|
|arrayBuffer (128)|4,414|2208|
|arrayBuffer (1024)|561|281|
|slice (0, 64)|209,766|110265|
|slice (0, 512)|36,606|22427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2279,"opsSec":4534.2509267156365},{"name":"new Blob (1024)","samples":314,"opsSec":617.3020323194967},{"name":"text (128)","samples":2206,"opsSec":4411.249875781124},{"name":"text (1024)","samples":277,"opsSec":553.0350511698775},{"name":"arrayBuffer (128)","samples":2208,"opsSec":4414.09940356341},{"name":"arrayBuffer (1024)","samples":281,"opsSec":561.1139360058302},{"name":"slice (0, 64)","samples":110265,"opsSec":209766.6372271102},{"name":"slice (0, 512)","samples":22427,"opsSec":36606.77926310425}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.58 ms|1|
|Gzip|134.95 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:32:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133581843},{"name":"Gzip","samples":1,"totalTime":0.134954727}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,654|3331|
|crypto.verify('RSA-SHA256')|6,829|3415|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3331,"opsSec":6654.284729496094},{"name":"crypto.verify('RSA-SHA256')","samples":3415,"opsSec":6829.4340994316535}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,518,536|759404|
|fromUnixToISOString(new Date())|2,020,839|1010876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":759404,"opsSec":1518536.482639831},{"name":"fromUnixToISOString(new Date())","samples":1010876,"opsSec":2020839.0172654237}]}-->
