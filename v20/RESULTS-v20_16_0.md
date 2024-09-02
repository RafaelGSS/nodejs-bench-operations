## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,377,166|9688584|
|Using dot notation|19,496,891|9748446|
|Using define property (writable)|3,298,636|1649319|
|Using define property initialized (writable)|4,136,324|2068163|
|Using define property (getter)|1,854,986|927494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:18:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":19377166.139760967,"samples":9688584},{"name":"Using dot notation","opsSec":19496891.298288573,"samples":9748446},{"name":"Using define property (writable)","opsSec":3298636.7399204588,"samples":1649319},{"name":"Using define property initialized (writable)","opsSec":4136324.5770968515,"samples":2068163},{"name":"Using define property (getter)","opsSec":1854986.7757120926,"samples":927494}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.09ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.261ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|33.043ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,818.207ms
new Array(length)|100,000,000|4,528.664ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.012ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|23.125ms
new Array(length)|1,000,000|4.625ms
array.push|100,000,000|2,528.888ms
new Array(length)|100,000,000|4,140.393ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":273.40622892869817,"samples":137},{"name":"Array.from","opsSec":23.129795342655715,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,400|2201|
|new Blob (1024)|506|257|
|text (128)|4,344|2173|
|text (1024)|544|273|
|arrayBuffer (128)|4,379|2190|
|arrayBuffer (1024)|545|273|
|slice (0, 64)|66,920|33461|
|slice (0, 512)|28,583|14292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4400.652370622016,"samples":2201},{"name":"new Blob (1024)","opsSec":506.825221001075,"samples":257},{"name":"text (128)","opsSec":4344.653782957618,"samples":2173},{"name":"text (1024)","opsSec":544.3196634262116,"samples":273},{"name":"arrayBuffer (128)","opsSec":4379.911254238047,"samples":2190},{"name":"arrayBuffer (1024)","opsSec":545.5854140085693,"samples":273},{"name":"slice (0, 64)","opsSec":66920.75995833614,"samples":33461},{"name":"slice (0, 512)","opsSec":28583.226080571625,"samples":14292}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|278,922|139462|
|[True conditional] Using constructor name|288,055|144028|
|[True conditional] Check if property is valid then instanceof |292,332|146167|
|[False conditional] Using instanceof only|19,239,873|9619937|
|[False conditional] Using constructor name|19,588,264|9794133|
|[False conditional] Check if property is valid then instanceof |19,343,301|9671651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":278922.26008303446,"samples":139462},{"name":"[True conditional] Using constructor name","opsSec":288055.8046980763,"samples":144028},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":292332.80494337063,"samples":146167},{"name":"[False conditional] Using instanceof only","opsSec":19239873.96149182,"samples":9619937},{"name":"[False conditional] Using constructor name","opsSec":19588264.74629804,"samples":9794133},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19343301.96139811,"samples":9671651}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,076|3539|
|crypto.verify('RSA-SHA256')|7,001|3501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7076.371047690146,"samples":3539},{"name":"crypto.verify('RSA-SHA256')","opsSec":7001.649371403115,"samples":3501}]}-->
