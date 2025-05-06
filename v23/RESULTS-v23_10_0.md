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
