## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,518,344|37760908|
|Using dot notation|65,898,271|32950559|
|Using define property (writable)|4,409,409|2204710|
|Using define property initialized (writable)|5,890,074|2945568|
|Using define property (getter)|2,215,812|1108963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37760908,"opsSec":75518344.11964744},{"name":"Using dot notation","samples":32950559,"opsSec":65898271.721847795},{"name":"Using define property (writable)","samples":2204710,"opsSec":4409409.946545322},{"name":"Using define property initialized (writable)","samples":2945568,"opsSec":5890074.149212528},{"name":"Using define property (getter)","samples":1108963,"opsSec":2215812.947593664}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.119ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.3ms
array.push|1,000,000|38.049ms
new Array(length)|1,000,000|9.295ms
array.push|100,000,000|1,955.267ms
new Array(length)|100,000,000|4,863.588ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.232ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|24.928ms
new Array(length)|1,000,000|5.159ms
array.push|100,000,000|2,702.877ms
new Array(length)|100,000,000|4,482.771ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":120,"opsSec":238.56348899675208},{"name":"Array.from","samples":11,"opsSec":21.50217119639713}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,361|2194|
|new Blob (1024)|538|273|
|text (128)|4,582|2297|
|text (1024)|575|289|
|arrayBuffer (128)|4,575|2297|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|56,456|29234|
|slice (0, 512)|24,793|12399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2194,"opsSec":4361.873381674646},{"name":"new Blob (1024)","samples":273,"opsSec":538.7344451800592},{"name":"text (128)","samples":2297,"opsSec":4582.218355958583},{"name":"text (1024)","samples":289,"opsSec":575.2387321351401},{"name":"arrayBuffer (128)","samples":2297,"opsSec":4575.103213292769},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.276679121093},{"name":"slice (0, 64)","samples":29234,"opsSec":56456.478044055606},{"name":"slice (0, 512)","samples":12399,"opsSec":24793.415598282216}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.81 ms|1|
|Gzip|135.60 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:18:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134807963},{"name":"Gzip","samples":1,"totalTime":0.135601805}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,790|3396|
|crypto.verify('RSA-SHA256')|6,821|3411|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:27:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3396,"opsSec":6790.273885217282},{"name":"crypto.verify('RSA-SHA256')","samples":3411,"opsSec":6821.292645595237}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,475,261|737772|
|fromUnixToISOString(new Date())|2,095,701|1047921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":737772,"opsSec":1475261.5877237387},{"name":"fromUnixToISOString(new Date())","samples":1047921,"opsSec":2095701.571229115}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,144|9074|
|Intl.DateTimeFormat().format(new Date())|17,402|8702|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,592|9297|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,448|8941|
|Reusing Intl.DateTimeFormat()|473,779|237004|
|Date.toLocaleDateString()|1,013,663|506848|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,930|10685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9074,"opsSec":18144.421412053744},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8702,"opsSec":17402.942318777634},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9297,"opsSec":18592.554428893152},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8941,"opsSec":17448.106489956397},{"name":"Reusing Intl.DateTimeFormat()","samples":237004,"opsSec":473779.61074840184},{"name":"Date.toLocaleDateString()","samples":506848,"opsSec":1013663.3600398068},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10685,"opsSec":20930.30633843172}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,184|535708|
|Using brackets {}|886,667|443334|
|Using '' + |1,034,394|517198|
|Using date.toString()|1,158,234|579278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":535708,"opsSec":1071184.8790081353},{"name":"Using brackets {}","samples":443334,"opsSec":886667.4963728621},{"name":"Using '' + ","samples":517198,"opsSec":1034394.4215141129},{"name":"Using date.toString()","samples":579278,"opsSec":1158234.1336836542}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,632,094|1816414|
|Using delete property (proto: null)|16,524,702|8262354|
|Using delete property (cached proto: null)|3,682,737|1841372|
|Using undefined assignment|83,310,958|41658614|
|Using undefined assignment (proto: null)|16,808,915|8404460|
|Using undefined property (cached proto: null)|82,693,101|41351191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1816414,"opsSec":3632094.411363359},{"name":"Using delete property (proto: null)","samples":8262354,"opsSec":16524702.183304831},{"name":"Using delete property (cached proto: null)","samples":1841372,"opsSec":3682737.5036510434},{"name":"Using undefined assignment","samples":41658614,"opsSec":83310958.51712775},{"name":"Using undefined assignment (proto: null)","samples":8404460,"opsSec":16808915.663299758},{"name":"Using undefined property (cached proto: null)","samples":41351191,"opsSec":82693101.51860276}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|316,240|158122|
|NodeError|303,501|151751|
|NodeError Range|270,976|135489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":158122,"opsSec":316240.89957422053},{"name":"NodeError","samples":151751,"opsSec":303501.1034577404},{"name":"NodeError Range","samples":135489,"opsSec":270976.537810602}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,415,572|36766852|
|using Array.includes (first item)|86,825,660|43416039|
|Using raw comparison|100,661,656|50343249|
|Using raw comparison (first item)|100,248,247|50127651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":36766852,"opsSec":73415572.61724418},{"name":"using Array.includes (first item)","samples":43416039,"opsSec":86825660.889055},{"name":"Using raw comparison","samples":50343249,"opsSec":100661656.51508188},{"name":"Using raw comparison (first item)","samples":50127651,"opsSec":100248247.73130363}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,305,859|21156062|
|Using Object.getOwnPropertyNames()|42,584,638|21314432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:53:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21156062,"opsSec":42305859.43294688},{"name":"Using Object.getOwnPropertyNames()","samples":21314432,"opsSec":42584638.234976724}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|98,055,344|49091516|
|Length = 10_000 - Array.at|100,098,288|50049322|
|Length = 1_000_000 - Array.at|99,959,714|49987640|
|Length = 100 - Array[length - 1]|96,513,682|48257668|
|Length = 10_000 - Array[length - 1]|99,452,303|49728015|
|Length = 1_000_000 - Array[length - 1]|96,616,127|48308073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49091516,"opsSec":98055344.72232397},{"name":"Length = 10_000 - Array.at","samples":50049322,"opsSec":100098288.85127115},{"name":"Length = 1_000_000 - Array.at","samples":49987640,"opsSec":99959714.67306995},{"name":"Length = 100 - Array[length - 1]","samples":48257668,"opsSec":96513682.91363905},{"name":"Length = 10_000 - Array[length - 1]","samples":49728015,"opsSec":99452303.32328987},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48308073,"opsSec":96616127.64293575}]}-->
