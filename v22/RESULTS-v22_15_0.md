## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,649,459|46333303|
|Using dot notation|63,154,814|31776183|
|Using define property (writable)|4,897,941|2449009|
|Using define property initialized (writable)|6,789,759|3395197|
|Using define property (getter)|2,421,244|1216326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":46333303,"opsSec":92649459.17929077},{"name":"Using dot notation","samples":31776183,"opsSec":63154814.526372746},{"name":"Using define property (writable)","samples":2449009,"opsSec":4897941.905574555},{"name":"Using define property initialized (writable)","samples":3395197,"opsSec":6789759.551288008},{"name":"Using define property (getter)","samples":1216326,"opsSec":2421244.312265251}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|32.741ms
new Array(length)|1,000,000|7.17ms
array.push|100,000,000|2,027.44ms
new Array(length)|100,000,000|4,440.007ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|15.459ms
new Array(length)|10,000|5.25ms
array.push|1,000,000|182.105ms
new Array(length)|1,000,000|8.032ms
array.push|100,000,000|2,137.956ms
new Array(length)|100,000,000|5,063.974ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":137,"opsSec":273.3456427859563},{"name":"Array.from","samples":13,"opsSec":24.06206817148176}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,583|2292|
|new Blob (1024)|547|279|
|text (128)|4,292|2150|
|text (1024)|536|269|
|arrayBuffer (128)|4,270|2140|
|arrayBuffer (1024)|529|266|
|slice (0, 64)|142,022|78939|
|slice (0, 512)|31,058|15531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2292,"opsSec":4583.065485449124},{"name":"new Blob (1024)","samples":279,"opsSec":547.3134799063027},{"name":"text (128)","samples":2150,"opsSec":4292.662766166929},{"name":"text (1024)","samples":269,"opsSec":536.280203016945},{"name":"arrayBuffer (128)","samples":2140,"opsSec":4270.955789851763},{"name":"arrayBuffer (1024)","samples":266,"opsSec":529.8554535001055},{"name":"slice (0, 64)","samples":78939,"opsSec":142022.5029572459},{"name":"slice (0, 512)","samples":15531,"opsSec":31058.769950042737}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.17 ms|1|
|Gzip|134.58 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:23:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13416985},{"name":"Gzip","samples":1,"totalTime":0.134578189}]}-->
