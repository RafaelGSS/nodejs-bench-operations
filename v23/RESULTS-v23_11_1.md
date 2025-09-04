## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,238,029|44620971|
|Using dot notation|63,624,208|31855939|
|Using define property (writable)|4,764,241|2382122|
|Using define property initialized (writable)|7,050,322|3528097|
|Using define property (getter)|2,419,700|1209851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44620971,"opsSec":89238029.26936865},{"name":"Using dot notation","samples":31855939,"opsSec":63624208.930031136},{"name":"Using define property (writable)","samples":2382122,"opsSec":4764241.332024855},{"name":"Using define property initialized (writable)","samples":3528097,"opsSec":7050322.533695874},{"name":"Using define property (getter)","samples":1209851,"opsSec":2419700.1513490845}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|31.779ms
new Array(length)|1,000,000|7.626ms
array.push|10,000,000|262.749ms
new Array(length)|10,000,000|69.69ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|18.15ms
new Array(length)|1,000,000|11.164ms
array.push|10,000,000|224.835ms
new Array(length)|10,000,000|65.885ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|260|132|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:19:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":132,"opsSec":260.54897103674676},{"name":"Array.from","samples":12,"opsSec":22.774712712656743}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2208|
|new Blob (1024)|579|294|
|text (128)|4,156|2084|
|text (1024)|514|258|
|arrayBuffer (128)|4,078|2041|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|148,771|81994|
|slice (0, 512)|31,803|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2208,"opsSec":4377.806336443236},{"name":"new Blob (1024)","samples":294,"opsSec":579.9863632185904},{"name":"text (128)","samples":2084,"opsSec":4156.7828466661795},{"name":"text (1024)","samples":258,"opsSec":514.1884247109574},{"name":"arrayBuffer (128)","samples":2041,"opsSec":4078.4595952653},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.8189369626601},{"name":"slice (0, 64)","samples":81994,"opsSec":148771.88935972087},{"name":"slice (0, 512)","samples":15910,"opsSec":31803.61299758132}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.19 ms|1|
|Gzip|135.62 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:33:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134190953},{"name":"Gzip","samples":1,"totalTime":0.135618911}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,804|3403|
|crypto.verify('RSA-SHA256')|6,833|3417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3403,"opsSec":6804.146768153051},{"name":"crypto.verify('RSA-SHA256')","samples":3417,"opsSec":6833.136100269116}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,212,236|606186|
|fromUnixToISOString(new Date())|2,154,696|1095128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":606186,"opsSec":1212236.389539575},{"name":"fromUnixToISOString(new Date())","samples":1095128,"opsSec":2154696.339567715}]}-->
