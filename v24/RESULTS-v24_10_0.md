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

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,117,402|558736|
|Using brackets {}|1,136,980|568508|
|Using '' + |1,131,006|565537|
|Using date.toString()|1,260,729|630419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:28:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":558736,"opsSec":1117402.01264234},{"name":"Using brackets {}","samples":568508,"opsSec":1136980.8172655907},{"name":"Using '' + ","samples":565537,"opsSec":1131006.2029641694},{"name":"Using date.toString()","samples":630419,"opsSec":1260729.2091550836}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,163,261|2081633|
|Using delete property (proto: null)|17,275,468|8640122|
|Using delete property (cached proto: null)|4,216,790|2108511|
|Using undefined assignment|78,939,068|39952642|
|Using undefined assignment (proto: null)|19,229,821|9619030|
|Using undefined property (cached proto: null)|76,532,980|38269336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2081633,"opsSec":4163261.1789435553},{"name":"Using delete property (proto: null)","samples":8640122,"opsSec":17275468.024110053},{"name":"Using delete property (cached proto: null)","samples":2108511,"opsSec":4216790.590965949},{"name":"Using undefined assignment","samples":39952642,"opsSec":78939068.07016172},{"name":"Using undefined assignment (proto: null)","samples":9619030,"opsSec":19229821.944279067},{"name":"Using undefined property (cached proto: null)","samples":38269336,"opsSec":76532980.54836854}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|358,645|179323|
|NodeError|327,158|163580|
|NodeError Range|315,536|157769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:37:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":179323,"opsSec":358645.5237187445},{"name":"NodeError","samples":163580,"opsSec":327158.3543934774},{"name":"NodeError Range","samples":157769,"opsSec":315536.1522202926}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,640,017|33425968|
|using Array.includes (first item)|79,531,609|39765815|
|Using raw comparison|96,821,797|48853203|
|Using raw comparison (first item)|90,276,439|45394851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33425968,"opsSec":66640017.94405714},{"name":"using Array.includes (first item)","samples":39765815,"opsSec":79531609.48084475},{"name":"Using raw comparison","samples":48853203,"opsSec":96821797.32794155},{"name":"Using raw comparison (first item)","samples":45394851,"opsSec":90276439.27665591}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,366,925|22218943|
|Using Object.getOwnPropertyNames()|46,472,068|23236534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22218943,"opsSec":44366925.89366109},{"name":"Using Object.getOwnPropertyNames()","samples":23236534,"opsSec":46472068.94346186}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,775,555|47887784|
|Length = 10_000 - Array.at|97,102,857|48587788|
|Length = 1_000_000 - Array.at|95,233,567|47616921|
|Length = 100 - Array[length - 1]|93,851,104|46925565|
|Length = 10_000 - Array[length - 1]|96,136,553|48068715|
|Length = 1_000_000 - Array[length - 1]|94,832,901|47416485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47887784,"opsSec":95775555.54917777},{"name":"Length = 10_000 - Array.at","samples":48587788,"opsSec":97102857.41793115},{"name":"Length = 1_000_000 - Array.at","samples":47616921,"opsSec":95233567.91779153},{"name":"Length = 100 - Array[length - 1]","samples":46925565,"opsSec":93851104.8479039},{"name":"Length = 10_000 - Array[length - 1]","samples":48068715,"opsSec":96136553.81144856},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47416485,"opsSec":94832901.53064509}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,340,289|45120950|
|~ (small)|93,776,633|46896685|
|Math.floor (long)|94,110,871|47067583|
|~ (long)|92,663,533|46332799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:53:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45120950,"opsSec":89340289.23658144},{"name":"~ (small)","samples":46896685,"opsSec":93776633.87170617},{"name":"Math.floor (long)","samples":47067583,"opsSec":94110871.4667526},{"name":"~ (long)","samples":46332799,"opsSec":92663533.45647459}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,516,010|18260793|
|Object.create({})|2,042,687|1022876|
|new Function with empty prototype|71,006,315|35504833|
|Empty class|79,159,846|39587322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18260793,"opsSec":36516010.516418286},{"name":"Object.create({})","samples":1022876,"opsSec":2042687.596835604},{"name":"new Function with empty prototype","samples":35504833,"opsSec":71006315.9220148},{"name":"Empty class","samples":39587322,"opsSec":79159846.49157563}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,749,039|46938409|
|Using parseInt(x, 10) - big number (10 len)|96,187,428|48097321|
|Using + - small number (2 len)|93,710,895|46855469|
|Using + - big number (10 len)|95,105,213|47630896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46938409,"opsSec":93749039.1845799},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48097321,"opsSec":96187428.90470642},{"name":"Using + - small number (2 len)","samples":46855469,"opsSec":93710895.08041006},{"name":"Using + - big number (10 len)","samples":47630896,"opsSec":95105213.05974354}]}-->
