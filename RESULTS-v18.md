## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,747,234|37883686|
|Using dot notation|64,996,035|32522072|
|Using define property (writable)|3,876,713|1938358|
|Using define property initialized (writable)|5,527,575|2763789|
|Using define property (getter)|2,040,130|1027033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37883686,"opsSec":75747234.14331959},{"name":"Using dot notation","samples":32522072,"opsSec":64996035.10474411},{"name":"Using define property (writable)","samples":1938358,"opsSec":3876713.3328212267},{"name":"Using define property initialized (writable)","samples":2763789,"opsSec":5527575.866355716},{"name":"Using define property (getter)","samples":1027033,"opsSec":2040130.6225655847}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.4ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.325ms
new Array(length)|1,000,000|9.48ms
array.push|100,000,000|2,074.637ms
new Array(length)|100,000,000|4,423.069ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.469ms
new Array(length)|10,000|3.366ms
array.push|1,000,000|281.483ms
new Array(length)|1,000,000|5.237ms
array.push|100,000,000|2,453.348ms
new Array(length)|100,000,000|4,794.319ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|225|113|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:08:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":225.65363971532813},{"name":"Array.from","samples":11,"opsSec":20.81900043728039}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,906|1994|
|new Blob (1024)|527|264|
|text (128)|44,149|22088|
|text (1024)|29,994|14998|
|arrayBuffer (128)|47,559|23806|
|arrayBuffer (1024)|30,219|15110|
|slice (0, 64)|77,131|38774|
|slice (0, 512)|41,618|20849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1994,"opsSec":3906.9962008831358},{"name":"new Blob (1024)","samples":264,"opsSec":527.7672725768808},{"name":"text (128)","samples":22088,"opsSec":44149.11689633595},{"name":"text (1024)","samples":14998,"opsSec":29994.6281056997},{"name":"arrayBuffer (128)","samples":23806,"opsSec":47559.02808868843},{"name":"arrayBuffer (1024)","samples":15110,"opsSec":30219.453874029587},{"name":"slice (0, 64)","samples":38774,"opsSec":77131.42443779942},{"name":"slice (0, 512)","samples":20849,"opsSec":41618.087944032195}]}-->
