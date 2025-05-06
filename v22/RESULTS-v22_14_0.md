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

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,395|2211|
|new Blob (1024)|559|280|
|text (128)|4,228|2118|
|text (1024)|529|265|
|arrayBuffer (128)|4,208|2105|
|arrayBuffer (1024)|527|265|
|slice (0, 64)|138,269|81553|
|slice (0, 512)|31,705|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2211,"opsSec":4395.030484366768},{"name":"new Blob (1024)","samples":280,"opsSec":559.2843453445406},{"name":"text (128)","samples":2118,"opsSec":4228.216656496555},{"name":"text (1024)","samples":265,"opsSec":529.4767900971904},{"name":"arrayBuffer (128)","samples":2105,"opsSec":4208.331379774594},{"name":"arrayBuffer (1024)","samples":265,"opsSec":527.1559399341494},{"name":"slice (0, 64)","samples":81553,"opsSec":138269.32939670252},{"name":"slice (0, 512)","samples":15878,"opsSec":31705.665797086494}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.24 ms|1|
|Gzip|136.68 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:18:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135241135},{"name":"Gzip","samples":1,"totalTime":0.136684739}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,622|3312|
|crypto.verify('RSA-SHA256')|6,902|3452|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:28:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3312,"opsSec":6622.171287398985},{"name":"crypto.verify('RSA-SHA256')","samples":3452,"opsSec":6902.994137112304}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,471,315|735838|
|fromUnixToISOString(new Date())|2,075,442|1037952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":735838,"opsSec":1471315.0834673953},{"name":"fromUnixToISOString(new Date())","samples":1037952,"opsSec":2075442.4174554732}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,492|9747|
|Intl.DateTimeFormat().format(new Date())|19,093|9547|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,004|9503|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,064|9036|
|Reusing Intl.DateTimeFormat()|518,915|259540|
|Date.toLocaleDateString()|1,025,014|512509|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,925|11463|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9747,"opsSec":19492.012165615328},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9547,"opsSec":19093.95757322627},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9503,"opsSec":19004.617338070184},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9036,"opsSec":18064.082620971723},{"name":"Reusing Intl.DateTimeFormat()","samples":259540,"opsSec":518915.6625231729},{"name":"Date.toLocaleDateString()","samples":512509,"opsSec":1025014.7015026906},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11463,"opsSec":22925.052324187025}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,084,115|542058|
|Using brackets {}|1,052,290|526193|
|Using '' + |1,075,497|537778|
|Using date.toString()|1,184,495|592249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":542058,"opsSec":1084115.0091188818},{"name":"Using brackets {}","samples":526193,"opsSec":1052290.0627149823},{"name":"Using '' + ","samples":537778,"opsSec":1075497.3230170507},{"name":"Using date.toString()","samples":592249,"opsSec":1184495.3656823067}]}-->
