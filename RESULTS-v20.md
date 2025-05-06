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

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|224|113|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":224.74698476710483},{"name":"Array.from","samples":11,"opsSec":21.376689135205826}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,170|2095|
|new Blob (1024)|537|272|
|text (128)|4,416|2209|
|text (1024)|552|278|
|arrayBuffer (128)|4,462|2234|
|arrayBuffer (1024)|546|275|
|slice (0, 64)|58,316|29753|
|slice (0, 512)|24,695|12350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2095,"opsSec":4170.476390213525},{"name":"new Blob (1024)","samples":272,"opsSec":537.9264797566884},{"name":"text (128)","samples":2209,"opsSec":4416.43505390439},{"name":"text (1024)","samples":278,"opsSec":552.8890514338505},{"name":"arrayBuffer (128)","samples":2234,"opsSec":4462.32641969694},{"name":"arrayBuffer (1024)","samples":275,"opsSec":546.6623421368367},{"name":"slice (0, 64)","samples":29753,"opsSec":58316.47089047497},{"name":"slice (0, 512)","samples":12350,"opsSec":24695.357618502727}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.04 ms|1|
|Gzip|135.54 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:19:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134036983},{"name":"Gzip","samples":1,"totalTime":0.135540509}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,779|3390|
|crypto.verify('RSA-SHA256')|6,602|3345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3390,"opsSec":6779.248981239361},{"name":"crypto.verify('RSA-SHA256')","samples":3345,"opsSec":6602.18838563941}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,202|730320|
|fromUnixToISOString(new Date())|2,099,626|1049867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":730320,"opsSec":1459202.8981889072},{"name":"fromUnixToISOString(new Date())","samples":1049867,"opsSec":2099626.8308473}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,398|9209|
|Intl.DateTimeFormat().format(new Date())|18,013|9007|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,671|9336|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,649|8825|
|Reusing Intl.DateTimeFormat()|484,729|242367|
|Date.toLocaleDateString()|985,578|492790|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,033|10946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9209,"opsSec":18398.649698544446},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9007,"opsSec":18013.372774359996},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9336,"opsSec":18671.94088463516},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8825,"opsSec":17649.407227008873},{"name":"Reusing Intl.DateTimeFormat()","samples":242367,"opsSec":484729.82162893756},{"name":"Date.toLocaleDateString()","samples":492790,"opsSec":985578.9651420865},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10946,"opsSec":21033.558997262335}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,038,354|519178|
|Using brackets {}|1,038,383|519212|
|Using '' + |1,048,051|524026|
|Using date.toString()|1,153,866|577002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":519178,"opsSec":1038354.4424683363},{"name":"Using brackets {}","samples":519212,"opsSec":1038383.6982519033},{"name":"Using '' + ","samples":524026,"opsSec":1048051.1322136626},{"name":"Using date.toString()","samples":577002,"opsSec":1153866.362204851}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,604,501|1802741|
|Using delete property (proto: null)|16,466,847|8233425|
|Using delete property (cached proto: null)|3,639,871|1819978|
|Using undefined assignment|82,512,010|41303319|
|Using undefined assignment (proto: null)|16,754,381|8378058|
|Using undefined property (cached proto: null)|82,764,602|41383034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1802741,"opsSec":3604501.741333437},{"name":"Using delete property (proto: null)","samples":8233425,"opsSec":16466847.299437042},{"name":"Using delete property (cached proto: null)","samples":1819978,"opsSec":3639871.7078509894},{"name":"Using undefined assignment","samples":41303319,"opsSec":82512010.75071077},{"name":"Using undefined assignment (proto: null)","samples":8378058,"opsSec":16754381.75394465},{"name":"Using undefined property (cached proto: null)","samples":41383034,"opsSec":82764602.90099944}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|314,645|157357|
|NodeError|302,159|151113|
|NodeError Range|272,820|136428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:48:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":157357,"opsSec":314645.49349528324},{"name":"NodeError","samples":151113,"opsSec":302159.4107133858},{"name":"NodeError Range","samples":136428,"opsSec":272820.14052072994}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,512,058|34756870|
|using Array.includes (first item)|74,904,902|37454263|
|Using raw comparison|87,510,325|43755174|
|Using raw comparison (first item)|88,876,943|44438508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34756870,"opsSec":69512058.50330481},{"name":"using Array.includes (first item)","samples":37454263,"opsSec":74904902.40044147},{"name":"Using raw comparison","samples":43755174,"opsSec":87510325.24731544},{"name":"Using raw comparison (first item)","samples":44438508,"opsSec":88876943.29866038}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,088,098|20066642|
|Using Object.getOwnPropertyNames()|40,024,354|20013938|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:52:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20066642,"opsSec":40088098.85972266},{"name":"Using Object.getOwnPropertyNames()","samples":20013938,"opsSec":40024354.257068925}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,504,350|46752183|
|Length = 10_000 - Array.at|93,255,382|46627700|
|Length = 1_000_000 - Array.at|93,914,047|46963102|
|Length = 100 - Array[length - 1]|93,495,827|46749347|
|Length = 10_000 - Array[length - 1]|92,919,477|46459746|
|Length = 1_000_000 - Array[length - 1]|92,299,823|46149924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:56:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46752183,"opsSec":93504350.10426047},{"name":"Length = 10_000 - Array.at","samples":46627700,"opsSec":93255382.46798809},{"name":"Length = 1_000_000 - Array.at","samples":46963102,"opsSec":93914047.95346099},{"name":"Length = 100 - Array[length - 1]","samples":46749347,"opsSec":93495827.97888914},{"name":"Length = 10_000 - Array[length - 1]","samples":46459746,"opsSec":92919477.69040042},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46149924,"opsSec":92299823.07904777}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,277,648|50178292|
|~ (small)|99,263,564|49633223|
|Math.floor (long)|101,142,058|50626787|
|~ (long)|101,149,160|50574588|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":50178292,"opsSec":99277648.41588691},{"name":"~ (small)","samples":49633223,"opsSec":99263564.77576882},{"name":"Math.floor (long)","samples":50626787,"opsSec":101142058.81163663},{"name":"~ (long)","samples":50574588,"opsSec":101149160.82762589}]}-->
