## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,994,870|53532390|
|Using dot notation|78,892,510|39446282|
|Using define property (writable)|4,854,596|2428070|
|Using define property initialized (writable)|6,929,654|3464837|
|Using define property (getter)|2,319,770|1159993|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:48:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53532390,"opsSec":106994870.83533464},{"name":"Using dot notation","samples":39446282,"opsSec":78892510.51087788},{"name":"Using define property (writable)","samples":2428070,"opsSec":4854596.937235919},{"name":"Using define property initialized (writable)","samples":3464837,"opsSec":6929654.998885994},{"name":"Using define property (getter)","samples":1159993,"opsSec":2319770.548990492}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.31ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|26.948ms
new Array(length)|1,000,000|7.666ms
array.push|10,000,000|256.177ms
new Array(length)|10,000,000|64.658ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.117ms
array.push|1,000,000|18.331ms
new Array(length)|1,000,000|11.173ms
array.push|10,000,000|354.164ms
new Array(length)|10,000,000|50.711ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|152|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:59:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":152,"opsSec":303.3403142915782},{"name":"Array.from","samples":12,"opsSec":23.19972089498445}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,573|2303|
|new Blob (1024)|614|310|
|text (128)|4,445|2227|
|text (1024)|555|279|
|arrayBuffer (128)|4,428|2215|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,239|93207|
|slice (0, 512)|31,098|15550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2303,"opsSec":4573.157739644327},{"name":"new Blob (1024)","samples":310,"opsSec":614.5838824318162},{"name":"text (128)","samples":2227,"opsSec":4445.271469425124},{"name":"text (1024)","samples":279,"opsSec":555.8729000957311},{"name":"arrayBuffer (128)","samples":2215,"opsSec":4428.384100355317},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.5767595994066},{"name":"slice (0, 64)","samples":93207,"opsSec":161239.73972746846},{"name":"slice (0, 512)","samples":15550,"opsSec":31098.94226277576}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.13 ms|1|
|Gzip|134.92 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:09:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135131942},{"name":"Gzip","samples":1,"totalTime":0.134919868}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,460|10731|
|crypto.verify('RSA-SHA256')|21,354|10740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10731,"opsSec":21460.119578482052},{"name":"crypto.verify('RSA-SHA256')","samples":10740,"opsSec":21354.46126498862}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,450,662|725382|
|fromUnixToISOString(new Date())|3,015,941|1507972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":725382,"opsSec":1450662.5232551731},{"name":"fromUnixToISOString(new Date())","samples":1507972,"opsSec":3015941.6535973935}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,134|11068|
|Intl.DateTimeFormat().format(new Date())|21,076|10539|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,797|10399|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,988|9995|
|Reusing Intl.DateTimeFormat()|459,739|229872|
|Date.toLocaleDateString()|1,026,874|513620|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,677|13339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11068,"opsSec":22134.51871373864},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10539,"opsSec":21076.13084226012},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10399,"opsSec":20797.617240652304},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9995,"opsSec":19988.66711569939},{"name":"Reusing Intl.DateTimeFormat()","samples":229872,"opsSec":459739.4200758972},{"name":"Date.toLocaleDateString()","samples":513620,"opsSec":1026874.0097804263},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13339,"opsSec":26677.669090192605}]}-->
