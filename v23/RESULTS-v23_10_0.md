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
