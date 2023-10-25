## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|567,663,771|90|
|Using dot notation|587,784,973|92|
|Using define property (writable)|2,627,968|91|
|Using define property initialized (writable)|3,612,819|93|
|Using define property (getter)|1,411,777|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":567663771.3958545,"samples":8},{"name":"Using dot notation","opsSec":587784972.8908635,"samples":7},{"name":"Using define property (writable)","opsSec":2627968.3176407665,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3612818.761976375,"samples":5},{"name":"Using define property (getter)","opsSec":1411776.9815053002,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.003ms
array.push|100|0.096ms
new Array(length)|100|0.016ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.448ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|35.206ms
new Array(length)|1,000,000|11.085ms
array.push|100,000,000|1,854.569ms
new Array(length)|100,000,000|4,689.522ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.032ms
array.push|10,000|4.934ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|29.012ms
new Array(length)|1,000,000|8.915ms
array.push|100,000,000|2,044.426ms
new Array(length)|100,000,000|4,735.778ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":336.33539375770994,"samples":4},{"name":"Array.from","opsSec":15.433056623172263,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,423|80|
|new Blob (1024)|408|63|
|text (128)|3,909|84|
|text (1024)|483|89|
|arrayBuffer (128)|3,896|85|
|arrayBuffer (1024)|485|89|
|slice (0, 64)|93,474|45|
|slice (0, 512)|24,952|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3423.051834570329,"samples":4},{"name":"new Blob (1024)","opsSec":407.77655332776595,"samples":2},{"name":"text (128)","opsSec":3908.741006548852,"samples":5},{"name":"text (1024)","opsSec":482.59950628990356,"samples":2},{"name":"arrayBuffer (128)","opsSec":3895.606790632378,"samples":4},{"name":"arrayBuffer (1024)","opsSec":484.5056376571351,"samples":2},{"name":"slice (0, 64)","opsSec":93473.79792372797,"samples":4},{"name":"slice (0, 512)","opsSec":24951.528988719958,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,919|55|
|[True conditional] Using constructor name|128,491|94|
|[True conditional] Check if property is valid then instanceof |128,288|92|
|[False conditional] Using instanceof only|595,551,213|95|
|[False conditional] Using constructor name|598,311,523|89|
|[False conditional] Check if property is valid then instanceof |603,818,011|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159918.83193254686,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":128491.4071532465,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":128288.27432291608,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595551212.7071731,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":598311523.317196,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":603818011.352398,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,605|91|
|crypto.verify('RSA-SHA256')|4,543|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4605.139304930181,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4542.953637919513,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|780,759|93|
|fromUnixToISOString(new Date())|1,344,240|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":780758.8526696538,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1344240.1187290414,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,546|77|
|Intl.DateTimeFormat().format(new Date())|8,541|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,149|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,672|81|
|Reusing Intl.DateTimeFormat()|413,724|85|
|Date.toLocaleDateString()|488,134|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,837|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7545.5440896061145,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8541.164904270965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7149.105888115374,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8671.923667417248,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":413723.5554711957,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":488133.9129696268,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9836.879589277612,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|565,406|92|
|Using brackets {}|574,799|90|
|Using '' + |593,764|94|
|Using date.toString()|639,600|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":565406.1675100203,"samples":6},{"name":"Using brackets {}","opsSec":574798.884464134,"samples":5},{"name":"Using '' + ","opsSec":593763.5756847401,"samples":7},{"name":"Using date.toString()","opsSec":639599.8882514624,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,528,216|90|
|Using delete property (proto: null)|13,975,388|88|
|Using delete property (cached proto: null)|2,333,957|87|
|Using undefined assignment|669,108,011|87|
|Using undefined assignment (proto: null)|14,075,210|84|
|Using undefined property (cached proto: null)|660,913,130|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759738922119141},"benchmarks":[{"name":"Using delete property","opsSec":2528215.6723251687,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13975387.8341963,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":2333957.476038135,"samples":4},{"name":"Using undefined assignment","opsSec":669108011.3784556,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14075210.421404392,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":660913129.5363672,"samples":7}]}-->
