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

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,487|2245|
|new Blob (1024)|581|295|
|text (128)|4,153|2077|
|text (1024)|526|264|
|arrayBuffer (128)|4,146|2077|
|arrayBuffer (1024)|524|263|
|slice (0, 64)|251,409|136866|
|slice (0, 512)|34,988|24497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2245,"opsSec":4487.528879397156},{"name":"new Blob (1024)","samples":295,"opsSec":581.1122713438942},{"name":"text (128)","samples":2077,"opsSec":4153.88183036969},{"name":"text (1024)","samples":264,"opsSec":526.402460127541},{"name":"arrayBuffer (128)","samples":2077,"opsSec":4146.341185391592},{"name":"arrayBuffer (1024)","samples":263,"opsSec":524.0244550537192},{"name":"slice (0, 64)","samples":136866,"opsSec":251409.94318885845},{"name":"slice (0, 512)","samples":24497,"opsSec":34988.952170865094}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.32 ms|1|
|Gzip|133.51 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:07:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132318805},{"name":"Gzip","samples":1,"totalTime":0.133513614}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,776|10889|
|crypto.verify('RSA-SHA256')|21,149|10622|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10889,"opsSec":21776.01925328872},{"name":"crypto.verify('RSA-SHA256')","samples":10622,"opsSec":21149.03263763237}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,517,437|758923|
|fromUnixToISOString(new Date())|2,138,746|1069548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":758923,"opsSec":1517437.712139421},{"name":"fromUnixToISOString(new Date())","samples":1069548,"opsSec":2138746.190950501}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,915|10458|
|Intl.DateTimeFormat().format(new Date())|19,893|9947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,051|10026|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,015|9511|
|Reusing Intl.DateTimeFormat()|443,872|222456|
|Date.toLocaleDateString()|963,252|481650|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,967|12484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10458,"opsSec":20915.9405987287},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9947,"opsSec":19893.123986392136},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10026,"opsSec":20051.700186978807},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9511,"opsSec":19015.44841740227},{"name":"Reusing Intl.DateTimeFormat()","samples":222456,"opsSec":443872.3754384194},{"name":"Date.toLocaleDateString()","samples":481650,"opsSec":963252.1398541791},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12484,"opsSec":24967.711822670142}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,018,299|509150|
|Using brackets {}|1,050,992|525632|
|Using '' + |1,118,375|559241|
|Using date.toString()|1,222,561|611281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":509150,"opsSec":1018299.0977869993},{"name":"Using brackets {}","samples":525632,"opsSec":1050992.5685572592},{"name":"Using '' + ","samples":559241,"opsSec":1118375.6089283226},{"name":"Using date.toString()","samples":611281,"opsSec":1222561.6992498222}]}-->
