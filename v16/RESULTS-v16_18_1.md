## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,428,177|97|
|Using dot notation|848,756,204|98|
|Using define property (writable)|4,603,486|97|
|Using define property initialized (writable)|5,913,252|94|
|Using define property (getter)|2,274,922|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:50:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849428177.4301213,"samples":6},{"name":"Using dot notation","opsSec":848756203.9423821,"samples":8},{"name":"Using define property (writable)","opsSec":4603486.043842479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5913252.225284116,"samples":4},{"name":"Using define property (getter)","opsSec":2274922.4888364654,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.066ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|30.745ms
new Array(length)|1,000,000|5.993ms
array.push|100,000,000|1,788.759ms
new Array(length)|100,000,000|3,920.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.052ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.42ms
new Array(length)|10,000|3.212ms
array.push|1,000,000|250.062ms
new Array(length)|1,000,000|4.712ms
array.push|100,000,000|2,170.546ms
new Array(length)|100,000,000|4,172.922ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|86|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":300.45530656138504,"samples":4},{"name":"Array.from","opsSec":20.978021216633298,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,990,879|98|
|[async] async function|16,832,739|86|
|[async] function|353,126|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849990879.1732303,"samples":6},{"name":"[async] async function","opsSec":16832739.269487873,"samples":6},{"name":"[async] function","opsSec":353126.1980019028,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,425|83|
|new Blob (1024)|581|75|
|text (128)|42,697|85|
|text (1024)|26,548|74|
|arrayBuffer (128)|50,092|87|
|arrayBuffer (1024)|29,764|70|
|slice (0, 64)|94,326|82|
|slice (0, 512)|44,778|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:22:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4425.27966613247,"samples":4},{"name":"new Blob (1024)","opsSec":581.0274959524711,"samples":2},{"name":"text (128)","opsSec":42696.64245428106,"samples":4},{"name":"text (1024)","opsSec":26547.55533992964,"samples":6},{"name":"arrayBuffer (128)","opsSec":50091.61108733965,"samples":4},{"name":"arrayBuffer (1024)","opsSec":29764.055426172028,"samples":3},{"name":"slice (0, 64)","opsSec":94326.11192084792,"samples":3},{"name":"slice (0, 512)","opsSec":44778.025155977295,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,084|54|
|[True conditional] Using constructor name|185,984|95|
|[True conditional] Check if property is valid then instanceof |188,999|98|
|[False conditional] Using instanceof only|846,507,147|98|
|[False conditional] Using constructor name|847,172,468|101|
|[False conditional] Check if property is valid then instanceof |848,164,023|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:36:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239083.59092729495,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185984.22732209566,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":188998.92741839503,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846507146.5014391,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":847172468.4008707,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848164022.6720287,"samples":6}]}-->
