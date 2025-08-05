## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|109,199,882|54609066|
|Using dot notation|78,951,978|39476101|
|Using define property (writable)|5,102,447|2551402|
|Using define property initialized (writable)|6,883,027|3442765|
|Using define property (getter)|2,402,271|1201147|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:15:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":54609066,"opsSec":109199882.73399726},{"name":"Using dot notation","samples":39476101,"opsSec":78951978.88170768},{"name":"Using define property (writable)","samples":2551402,"opsSec":5102447.543014646},{"name":"Using define property initialized (writable)","samples":3442765,"opsSec":6883027.689049702},{"name":"Using define property (getter)","samples":1201147,"opsSec":2402271.389821679}]}-->

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|163|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:17:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":163,"opsSec":324.01914653388604},{"name":"Array.from","samples":12,"opsSec":23.978157672743798}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,502|2252|
|new Blob (1024)|619|313|
|text (128)|4,393|2203|
|text (1024)|555|279|
|arrayBuffer (128)|4,412|2209|
|arrayBuffer (1024)|557|280|
|slice (0, 64)|158,203|91419|
|slice (0, 512)|32,088|16047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2252,"opsSec":4502.214196738863},{"name":"new Blob (1024)","samples":313,"opsSec":619.8497319484588},{"name":"text (128)","samples":2203,"opsSec":4393.633485870794},{"name":"text (1024)","samples":279,"opsSec":555.9786019100627},{"name":"arrayBuffer (128)","samples":2209,"opsSec":4412.64110331321},{"name":"arrayBuffer (1024)","samples":280,"opsSec":557.5662134421332},{"name":"slice (0, 64)","samples":91419,"opsSec":158203.3495971455},{"name":"slice (0, 512)","samples":16047,"opsSec":32088.663013567584}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.14 ms|1|
|Gzip|134.81 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134141968},{"name":"Gzip","samples":1,"totalTime":0.13480594}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,927|10964|
|crypto.verify('RSA-SHA256')|21,687|10892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:20:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10964,"opsSec":21927.39888228704},{"name":"crypto.verify('RSA-SHA256')","samples":10892,"opsSec":21687.99475128226}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,537,833|768918|
|fromUnixToISOString(new Date())|2,760,631|1380317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:21:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":768918,"opsSec":1537833.7240060882},{"name":"fromUnixToISOString(new Date())","samples":1380317,"opsSec":2760631.4823040883}]}-->
