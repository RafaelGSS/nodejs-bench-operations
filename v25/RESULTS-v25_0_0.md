## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,979,273|54489890|
|Using dot notation|77,250,151|38680501|
|Using define property (writable)|4,935,747|2468633|
|Using define property initialized (writable)|6,827,453|3413732|
|Using define property (getter)|2,345,263|1203386|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:51:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":54489890,"opsSec":108979273.900252},{"name":"Using dot notation","samples":38680501,"opsSec":77250151.58598109},{"name":"Using define property (writable)","samples":2468633,"opsSec":4935747.576487064},{"name":"Using define property initialized (writable)","samples":3413732,"opsSec":6827453.704199814},{"name":"Using define property (getter)","samples":1203386,"opsSec":2345263.002984911}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.505ms
new Array(length)|10,000|0.267ms
array.push|1,000,000|29.279ms
new Array(length)|1,000,000|9.2ms
array.push|10,000,000|242.123ms
new Array(length)|10,000,000|63.939ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.396ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|17.764ms
new Array(length)|1,000,000|12.375ms
array.push|10,000,000|345.138ms
new Array(length)|10,000,000|51.874ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|151|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":300.82931609815904},{"name":"Array.from","samples":12,"opsSec":23.09203023836702}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,650|2347|
|new Blob (1024)|636|322|
|text (128)|4,559|2280|
|text (1024)|568|285|
|arrayBuffer (128)|4,561|2281|
|arrayBuffer (1024)|571|287|
|slice (0, 64)|188,843|104424|
|slice (0, 512)|22,645|11939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:03:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2347,"opsSec":4650.3571791338345},{"name":"new Blob (1024)","samples":322,"opsSec":636.3515255628633},{"name":"text (128)","samples":2280,"opsSec":4559.063030484101},{"name":"text (1024)","samples":285,"opsSec":568.3826501176108},{"name":"arrayBuffer (128)","samples":2281,"opsSec":4561.765625605688},{"name":"arrayBuffer (1024)","samples":287,"opsSec":571.0947223596543},{"name":"slice (0, 64)","samples":104424,"opsSec":188843.6200782333},{"name":"slice (0, 512)","samples":11939,"opsSec":22645.417747327505}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.55 ms|1|
|Gzip|131.77 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:10:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132553987},{"name":"Gzip","samples":1,"totalTime":0.131768475}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,780|10391|
|crypto.verify('RSA-SHA256')|21,256|10629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10391,"opsSec":20780.029637589763},{"name":"crypto.verify('RSA-SHA256')","samples":10629,"opsSec":21256.33788191566}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,465,668|732835|
|fromUnixToISOString(new Date())|2,602,386|1301320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":732835,"opsSec":1465668.1034254741},{"name":"fromUnixToISOString(new Date())","samples":1301320,"opsSec":2602386.0331470254}]}-->
