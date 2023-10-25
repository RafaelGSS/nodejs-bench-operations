## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|651,309,795|88|
|Using dot notation|640,792,002|89|
|Using define property (writable)|2,833,555|90|
|Using define property initialized (writable)|3,749,802|90|
|Using define property (getter)|1,536,244|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":651309795.3406146,"samples":9},{"name":"Using dot notation","opsSec":640792001.9753667,"samples":6},{"name":"Using define property (writable)","opsSec":2833555.2229388016,"samples":8},{"name":"Using define property initialized (writable)","opsSec":3749801.586644322,"samples":4},{"name":"Using define property (getter)","opsSec":1536243.647203398,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.006ms
array.push|100|0.051ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.559ms
new Array(length)|10,000|0.53ms
array.push|1,000,000|41.108ms
new Array(length)|1,000,000|9.797ms
array.push|100,000,000|2,132.599ms
new Array(length)|100,000,000|4,982.726ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.065ms
new Array(length)|100|0.014ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.39ms
new Array(length)|10,000|0.265ms
array.push|1,000,000|34.32ms
new Array(length)|1,000,000|9.516ms
array.push|100,000,000|2,684.771ms
new Array(length)|100,000,000|5,732.528ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|263|58|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":262.6051770753079,"samples":2},{"name":"Array.from","opsSec":14.579205421910864,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,387|86|
|new Blob (1024)|423|72|
|text (128)|3,636|85|
|text (1024)|454|87|
|arrayBuffer (128)|3,647|88|
|arrayBuffer (1024)|453|88|
|slice (0, 64)|50,216|68|
|slice (0, 512)|15,668|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3386.7700185706135,"samples":3},{"name":"new Blob (1024)","opsSec":422.8459296324513,"samples":2},{"name":"text (128)","opsSec":3636.4541805841286,"samples":4},{"name":"text (1024)","opsSec":453.5804617181817,"samples":3},{"name":"arrayBuffer (128)","opsSec":3646.541696079915,"samples":3},{"name":"arrayBuffer (1024)","opsSec":453.2088073322884,"samples":2},{"name":"slice (0, 64)","opsSec":50215.63539907446,"samples":3},{"name":"slice (0, 512)","opsSec":15667.672878726415,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,898|59|
|[True conditional] Using constructor name|145,136|91|
|[True conditional] Check if property is valid then instanceof |148,825|98|
|[False conditional] Using instanceof only|716,499,211|97|
|[False conditional] Using constructor name|716,907,804|95|
|[False conditional] Check if property is valid then instanceof |718,231,997|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178898.026352466,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145135.8493637828,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148825.13364590824,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":716499210.6605294,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716907803.9234965,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718231997.4219474,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,865|91|
|crypto.verify('RSA-SHA256')|3,953|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3864.913473233615,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":3953.2232411965097,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|803,305|92|
|fromUnixToISOString(new Date())|1,357,057|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":803305.1361582576,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1357057.4485603785,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,328|86|
|Intl.DateTimeFormat().format(new Date())|10,883|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,373|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,295|96|
|Reusing Intl.DateTimeFormat()|528,092|88|
|Date.toLocaleDateString()|608,502|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,386|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12328.174886313074,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10883.065742652376,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12373.172426669045,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15295.118322951455,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":528092.0123634248,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":608502.0031385712,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14385.974942111146,"samples":10},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|687,464|95|
|Using brackets {}|692,322|93|
|Using '' + |696,055|96|
|Using date.toString()|761,767|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":687464.2952055156,"samples":5},{"name":"Using brackets {}","opsSec":692322.2634516906,"samples":6},{"name":"Using '' + ","opsSec":696054.8297882231,"samples":5},{"name":"Using date.toString()","opsSec":761767.3345935626,"samples":8}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,191,890|89|
|Using delete property (proto: null)|10,183,384|96|
|Using delete property (cached proto: null)|2,246,467|92|
|Using undefined assignment|589,355,623|95|
|Using undefined assignment (proto: null)|11,337,851|94|
|Using undefined property (cached proto: null)|585,141,137|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2191890.1804444212,"samples":5},{"name":"Using delete property (proto: null)","opsSec":10183383.955204532,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2246467.208105072,"samples":5},{"name":"Using undefined assignment","opsSec":589355622.5874732,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":11337851.442385795,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":585141137.1207792,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|176,923|60|
|NodeError|141,959|89|
|NodeError Range|145,326|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":176922.84557312357,"samples":3},{"name":"NodeError","opsSec":141958.60421616366,"samples":3},{"name":"NodeError Range","opsSec":145326.3884922059,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,010,959|77|
|Function returning explicitly undefined|1,131,852|82|
|Function returning implicitly undefined|1,202,509|83|
|Function returning string|1,056,078|83|
|Function returning integer|1,101,463|86|
|Function returning float|1,090,177|85|
|Function returning functions|1,071,342|85|
|Function returning arrow functions|1,121,532|87|
|Function returning empty object|1,142,280|86|
|Function returning empty array|1,112,998|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1010959.3514157808,"samples":3},{"name":"Function returning explicitly undefined","opsSec":1131852.367041331,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1202508.5072437522,"samples":4},{"name":"Function returning string","opsSec":1056078.1520831063,"samples":5},{"name":"Function returning integer","opsSec":1101463.430089361,"samples":7},{"name":"Function returning float","opsSec":1090176.9228720183,"samples":5},{"name":"Function returning functions","opsSec":1071341.8649447905,"samples":4},{"name":"Function returning arrow functions","opsSec":1121531.9366269219,"samples":6},{"name":"Function returning empty object","opsSec":1142280.4439075452,"samples":5},{"name":"Function returning empty array","opsSec":1112997.904639185,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|689,460,680|83|
|using Array.includes (first item)|702,474,103|89|
|Using raw comparison|693,458,620|90|
|Using raw comparison (first item)|692,822,608|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":689460680.4619726,"samples":6},{"name":"using Array.includes (first item)","opsSec":702474102.8987685,"samples":9},{"name":"Using raw comparison","opsSec":693458620.1638358,"samples":5},{"name":"Using raw comparison (first item)","opsSec":692822608.1122094,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,743,377|93|
|Using Object.getOwnPropertyNames()|68,634,643|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":66743377.45125567,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":68634642.93394184,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|578,989,701|91|
|Length = 10_000 - Array.at|600,549,773|94|
|Length = 1_000_000 - Array.at|598,914,358|90|
|Length = 100 - Array[length - 1]|602,131,609|93|
|Length = 10_000 - Array[length - 1]|596,730,527|94|
|Length = 1_000_000 - Array[length - 1]|602,276,213|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":578989701.3780521,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":600549772.8738027,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":598914358.3443836,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":602131608.9920862,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":596730527.0902689,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":602276213.4305481,"samples":8}]}-->
