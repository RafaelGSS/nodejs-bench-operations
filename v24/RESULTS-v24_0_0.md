## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|68,316,754|34169422|
|Using dot notation|69,522,456|34763564|
|Using define property (writable)|4,923,027|2463540|
|Using define property initialized (writable)|7,124,418|3563080|
|Using define property (getter)|2,272,143|1137439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":34169422,"opsSec":68316754.59720205},{"name":"Using dot notation","samples":34763564,"opsSec":69522456.64709297},{"name":"Using define property (writable)","samples":2463540,"opsSec":4923027.117925168},{"name":"Using define property initialized (writable)","samples":3563080,"opsSec":7124418.478649405},{"name":"Using define property (getter)","samples":1137439,"opsSec":2272143.770351073}]}-->

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|267|134|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":134,"opsSec":267.5844167829697},{"name":"Array.from","samples":11,"opsSec":20.822323135613196}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,624|2328|
|new Blob (1024)|591|296|
|text (128)|4,296|2149|
|text (1024)|534|268|
|arrayBuffer (128)|4,292|2149|
|arrayBuffer (1024)|532|268|
|slice (0, 64)|156,839|84523|
|slice (0, 512)|31,849|15925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2328,"opsSec":4624.622831266685},{"name":"new Blob (1024)","samples":296,"opsSec":591.7022554250701},{"name":"text (128)","samples":2149,"opsSec":4296.404349795721},{"name":"text (1024)","samples":268,"opsSec":534.5783071677497},{"name":"arrayBuffer (128)","samples":2149,"opsSec":4292.015042544074},{"name":"arrayBuffer (1024)","samples":268,"opsSec":532.8879810846083},{"name":"slice (0, 64)","samples":84523,"opsSec":156839.8825048224},{"name":"slice (0, 512)","samples":15925,"opsSec":31849.895022746005}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|137.65 ms|1|
|Gzip|134.99 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:17:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.137650457},{"name":"Gzip","samples":1,"totalTime":0.13499385}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,875|3438|
|crypto.verify('RSA-SHA256')|6,913|3457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:28:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3438,"opsSec":6875.842721973579},{"name":"crypto.verify('RSA-SHA256')","samples":3457,"opsSec":6913.919148629477}]}-->
