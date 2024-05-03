## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,714,204|100|
|Using dot notation|909,496,022|95|
|Using define property (writable)|4,494,770|95|
|Using define property initialized (writable)|6,305,786|96|
|Using define property (getter)|2,591,783|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911714204.1435252,"samples":8},{"name":"Using dot notation","opsSec":909496022.3682208,"samples":6},{"name":"Using define property (writable)","opsSec":4494770.131145988,"samples":8},{"name":"Using define property initialized (writable)","opsSec":6305785.538697922,"samples":5},{"name":"Using define property (getter)","opsSec":2591782.76034946,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.095ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.278ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|26.148ms
new Array(length)|1,000,000|15.446ms
array.push|100,000,000|2,198.742ms
new Array(length)|100,000,000|4,261.828ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.073ms
new Array(length)|100|0.008ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.473ms
new Array(length)|10,000|3.135ms
array.push|1,000,000|255.31ms
new Array(length)|1,000,000|4.491ms
array.push|100,000,000|2,608.008ms
new Array(length)|100,000,000|4,637.439ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|214|86|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:29:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":214.14052151067182,"samples":2},{"name":"Array.from","opsSec":22.265471978337644,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,401,717|99|
|[async] async function|18,624,576|85|
|[async] function|388,481|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:36:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910401716.7408183,"samples":6},{"name":"[async] async function","opsSec":18624576.029875536,"samples":8},{"name":"[async] function","opsSec":388480.55204941134,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,658|89|
|new Blob (1024)|735|78|
|text (128)|42,894|77|
|text (1024)|25,550|76|
|arrayBuffer (128)|40,436|74|
|arrayBuffer (1024)|26,779|75|
|slice (0, 64)|94,515|78|
|slice (0, 512)|44,131|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5658.4301100432185,"samples":3},{"name":"new Blob (1024)","opsSec":734.5668723397673,"samples":2},{"name":"text (128)","opsSec":42894.01160969626,"samples":4},{"name":"text (1024)","opsSec":25550.421263792647,"samples":4},{"name":"arrayBuffer (128)","opsSec":40436.220937867234,"samples":3},{"name":"arrayBuffer (1024)","opsSec":26779.41989213329,"samples":5},{"name":"slice (0, 64)","opsSec":94515.40936049458,"samples":3},{"name":"slice (0, 512)","opsSec":44130.94454830563,"samples":3}]}-->
