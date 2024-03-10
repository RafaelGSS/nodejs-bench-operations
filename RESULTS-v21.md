## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,501,125|95|
|Using dot notation|817,784,327|97|
|Using define property (writable)|4,416,419|92|
|Using define property initialized (writable)|6,265,623|95|
|Using define property (getter)|2,483,912|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822501125.4191921,"samples":8},{"name":"Using dot notation","opsSec":817784326.7236955,"samples":6},{"name":"Using define property (writable)","opsSec":4416418.552217441,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6265623.350427806,"samples":5},{"name":"Using define property (getter)","opsSec":2483911.7509763613,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.279ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|25.081ms
new Array(length)|1,000,000|5.239ms
array.push|100,000,000|1,011.34ms
new Array(length)|100,000,000|3,616.321ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|16.89ms
new Array(length)|1,000,000|5.691ms
array.push|100,000,000|1,149.705ms
new Array(length)|100,000,000|3,591.471ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|617|80|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":616.5175546256347,"samples":2},{"name":"Array.from","opsSec":22.740016279155338,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,104,847|94|
|[async] async function|16,754,381|84|
|[async] function|204,595|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822104846.9222684,"samples":6},{"name":"[async] async function","opsSec":16754380.719680255,"samples":6},{"name":"[async] function","opsSec":204595.31457990562,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,560|89|
|new Blob (1024)|704|77|
|text (128)|5,981|89|
|text (1024)|746|89|
|arrayBuffer (128)|5,983|89|
|arrayBuffer (1024)|751|90|
|slice (0, 64)|174,750|53|
|slice (0, 512)|24,307|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5560.302575968935,"samples":5},{"name":"new Blob (1024)","opsSec":704.3495690586105,"samples":2},{"name":"text (128)","opsSec":5981.4200111769405,"samples":5},{"name":"text (1024)","opsSec":746.0643185612771,"samples":2},{"name":"arrayBuffer (128)","opsSec":5983.004045934672,"samples":3},{"name":"arrayBuffer (1024)","opsSec":750.6311800967388,"samples":3},{"name":"slice (0, 64)","opsSec":174750.0570754478,"samples":3},{"name":"slice (0, 512)","opsSec":24306.87762378252,"samples":3}]}-->
