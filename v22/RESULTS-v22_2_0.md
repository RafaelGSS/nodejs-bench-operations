## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,092,271|8046136|
|Using dot notation|16,135,624|8067813|
|Using define property (writable)|3,570,694|1785348|
|Using define property initialized (writable)|4,444,962|2222482|
|Using define property (getter)|2,317,808|1160907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Directly in the object","opsSec":16092271.388489142,"samples":8046136},{"name":"Using dot notation","opsSec":16135624.902834367,"samples":8067813},{"name":"Using define property (writable)","opsSec":3570694.7145425826,"samples":1785348},{"name":"Using define property initialized (writable)","opsSec":4444962.950998414,"samples":2222482},{"name":"Using define property (getter)","opsSec":2317808.7800722,"samples":1160907}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.317ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|22.417ms
new Array(length)|1,000,000|15.714ms
array.push|100,000,000|2,036.852ms
new Array(length)|100,000,000|4,238.187ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.504ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|16.294ms
new Array(length)|1,000,000|6.814ms
array.push|100,000,000|2,645.177ms
new Array(length)|100,000,000|4,189.174ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|242|122|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:12:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Array","opsSec":242.8476645184843,"samples":122},{"name":"Array.from","opsSec":23.714038949384104,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,460|3231|
|new Blob (1024)|793|397|
|text (128)|6,379|3190|
|text (1024)|812|407|
|arrayBuffer (128)|6,508|3255|
|arrayBuffer (1024)|809|405|
|slice (0, 64)|233,246|116624|
|slice (0, 512)|42,180|21091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:13:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":6460.842346268459,"samples":3231},{"name":"new Blob (1024)","opsSec":793.8009940907792,"samples":397},{"name":"text (128)","opsSec":6379.490049083555,"samples":3190},{"name":"text (1024)","opsSec":812.3722140503185,"samples":407},{"name":"arrayBuffer (128)","opsSec":6508.30916731152,"samples":3255},{"name":"arrayBuffer (1024)","opsSec":809.2990094769671,"samples":405},{"name":"slice (0, 64)","opsSec":233246.955520094,"samples":116624},{"name":"slice (0, 512)","opsSec":42180.55599085148,"samples":21091}]}-->
