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
