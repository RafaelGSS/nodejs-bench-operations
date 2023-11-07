## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|853,516,082|95|
|Using dot notation|853,250,434|95|
|Using define property (writable)|4,817,736|99|
|Using define property initialized (writable)|6,416,729|97|
|Using define property (getter)|2,483,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":853516081.7303174,"samples":7},{"name":"Using dot notation","opsSec":853250434.1669738,"samples":7},{"name":"Using define property (writable)","opsSec":4817736.400874697,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6416728.6953104,"samples":6},{"name":"Using define property (getter)","opsSec":2483205.175203627,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.004ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.307ms
array.push|1,000,000|30.753ms
new Array(length)|1,000,000|6.583ms
array.push|100,000,000|1,751.384ms
new Array(length)|100,000,000|4,240.035ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.235ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|22.929ms
new Array(length)|1,000,000|4.41ms
array.push|100,000,000|2,449.49ms
new Array(length)|100,000,000|3,952.21ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|310|88|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:10:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":309.83781862412314,"samples":4},{"name":"Array.from","opsSec":23.069157694234523,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,062,157|99|
|[async] async function|18,629,299|88|
|[async] function|189,704|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854062157.2650232,"samples":6},{"name":"[async] async function","opsSec":18629298.83960283,"samples":6},{"name":"[async] function","opsSec":189704.2634036507,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,419|84|
|new Blob (1024)|585|75|
|text (128)|5,559|88|
|text (1024)|697|89|
|arrayBuffer (128)|5,533|87|
|arrayBuffer (1024)|624|87|
|slice (0, 64)|71,020|72|
|slice (0, 512)|18,645|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4419.269917404159,"samples":3},{"name":"new Blob (1024)","opsSec":584.6887978671444,"samples":2},{"name":"text (128)","opsSec":5558.5959319675985,"samples":5},{"name":"text (1024)","opsSec":697.3334507296955,"samples":3},{"name":"arrayBuffer (128)","opsSec":5533.243904802605,"samples":3},{"name":"arrayBuffer (1024)","opsSec":624.3409560261427,"samples":3},{"name":"slice (0, 64)","opsSec":71020.32678140435,"samples":3},{"name":"slice (0, 512)","opsSec":18645.12938367271,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,486|52|
|[True conditional] Using constructor name|179,888|94|
|[True conditional] Check if property is valid then instanceof |181,847|98|
|[False conditional] Using instanceof only|855,309,809|98|
|[False conditional] Using constructor name|855,297,195|97|
|[False conditional] Check if property is valid then instanceof |855,853,707|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:41:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":231485.78453562036,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179888.0491143693,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181846.87452778968,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":855309808.6763289,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":855297194.911394,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":855853707.3279694,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,721|95|
|crypto.verify('RSA-SHA256')|6,762|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:53:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6721.182704868164,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6761.626668247793,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,491,228|99|
|fromUnixToISOString(new Date())|2,212,455|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:03:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1491228.4480469646,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2212454.900233239,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,327|84|
|Intl.DateTimeFormat().format(new Date())|19,970|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,060|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,694|84|
|Reusing Intl.DateTimeFormat()|732,132|98|
|Date.toLocaleDateString()|742,528|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,783|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18326.78091198963,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19969.862506247813,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19059.871605293127,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18694.045097944338,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":732131.8540976663,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":742528.263338057,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19782.517955133866,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
