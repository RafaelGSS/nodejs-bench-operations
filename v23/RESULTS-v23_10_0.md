## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,096,857|44082967|
|Using dot notation|64,849,499|32426352|
|Using define property (writable)|4,739,171|2370026|
|Using define property initialized (writable)|7,286,188|3643101|
|Using define property (getter)|2,430,490|1217205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:57:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":44082967,"opsSec":88096857.95844965},{"name":"Using dot notation","samples":32426352,"opsSec":64849499.26744521},{"name":"Using define property (writable)","samples":2370026,"opsSec":4739171.916818359},{"name":"Using define property initialized (writable)","samples":3643101,"opsSec":7286188.6225576885},{"name":"Using define property (getter)","samples":1217205,"opsSec":2430490.047319921}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.357ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|33.11ms
new Array(length)|1,000,000|8.952ms
array.push|100,000,000|1,969.396ms
new Array(length)|100,000,000|4,322.065ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|200.197ms
new Array(length)|10,000|0.057ms
array.push|1,000,000|18.021ms
new Array(length)|1,000,000|8.064ms
array.push|100,000,000|2,083.393ms
new Array(length)|100,000,000|5,025.68ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|277|140|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:11:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":140,"opsSec":277.61137784838525},{"name":"Array.from","samples":12,"opsSec":22.621607541199417}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,041|2529|
|new Blob (1024)|637|320|
|text (128)|4,164|2094|
|text (1024)|521|261|
|arrayBuffer (128)|4,169|2085|
|arrayBuffer (1024)|518|260|
|slice (0, 64)|161,523|80763|
|slice (0, 512)|20,059|11300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2529,"opsSec":5041.94211016713},{"name":"new Blob (1024)","samples":320,"opsSec":637.6659500477085},{"name":"text (128)","samples":2094,"opsSec":4164.649103999313},{"name":"text (1024)","samples":261,"opsSec":521.0046237922726},{"name":"arrayBuffer (128)","samples":2085,"opsSec":4169.092096814077},{"name":"arrayBuffer (1024)","samples":260,"opsSec":518.9538699549745},{"name":"slice (0, 64)","samples":80763,"opsSec":161523.40625714234},{"name":"slice (0, 512)","samples":11300,"opsSec":20059.95505164096}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.42 ms|1|
|Gzip|134.71 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:24:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132418728},{"name":"Gzip","samples":1,"totalTime":0.13470931}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,889|3445|
|crypto.verify('RSA-SHA256')|6,856|3429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3445,"opsSec":6889.376800753357},{"name":"crypto.verify('RSA-SHA256')","samples":3429,"opsSec":6856.98955401932}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,460,971|731207|
|fromUnixToISOString(new Date())|2,109,836|1055032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":731207,"opsSec":1460971.5506466723},{"name":"fromUnixToISOString(new Date())","samples":1055032,"opsSec":2109836.7199491803}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,741|10371|
|Intl.DateTimeFormat().format(new Date())|20,192|10097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,059|10030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,216|9609|
|Reusing Intl.DateTimeFormat()|588,102|294053|
|Date.toLocaleDateString()|1,087,141|543814|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,772|12389|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10371,"opsSec":20741.401403155505},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10097,"opsSec":20192.41218985986},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10030,"opsSec":20059.05521849921},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9609,"opsSec":19216.668015873147},{"name":"Reusing Intl.DateTimeFormat()","samples":294053,"opsSec":588102.384346541},{"name":"Date.toLocaleDateString()","samples":543814,"opsSec":1087141.6432687675},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12389,"opsSec":24772.99446782981}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,496|522152|
|Using brackets {}|1,052,935|526469|
|Using '' + |1,047,037|523519|
|Using date.toString()|1,152,744|576874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":522152,"opsSec":1043496.7905357196},{"name":"Using brackets {}","samples":526469,"opsSec":1052935.5171780505},{"name":"Using '' + ","samples":523519,"opsSec":1047037.8722613795},{"name":"Using date.toString()","samples":576874,"opsSec":1152744.0728814395}]}-->
