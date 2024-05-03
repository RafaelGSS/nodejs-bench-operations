## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|144,927,768|82|
|Using dot notation|147,218,272|85|
|Using define property (writable)|5,198,625|95|
|Using define property initialized (writable)|7,913,677|96|
|Using define property (getter)|2,819,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:22:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":144927768.27405336,"samples":5},{"name":"Using dot notation","opsSec":147218271.75846058,"samples":5},{"name":"Using define property (writable)","opsSec":5198625.005940904,"samples":6},{"name":"Using define property initialized (writable)","opsSec":7913676.657708174,"samples":5},{"name":"Using define property (getter)","opsSec":2819504.5574301598,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.066ms
new Array(length)|100|0.008ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.167ms
array.push|1,000,000|27.812ms
new Array(length)|1,000,000|6.486ms
array.push|100,000,000|2,023.091ms
new Array(length)|100,000,000|4,030.398ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|16.197ms
new Array(length)|1,000,000|8.163ms
array.push|100,000,000|2,622.882ms
new Array(length)|100,000,000|4,032.636ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|251|91|
|Array.from|25|45|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:34:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":251.48374602344674,"samples":3},{"name":"Array.from","opsSec":24.99870908055125,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|139,367,380|78|
|[async] async function|19,255,413|89|
|[async] function|221,145|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":139367380.38977394,"samples":4},{"name":"[async] async function","opsSec":19255413.35297198,"samples":8},{"name":"[async] function","opsSec":221145.49805896837,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,334|84|
|new Blob (1024)|798|75|
|text (128)|6,482|89|
|text (1024)|828|89|
|arrayBuffer (128)|6,497|91|
|arrayBuffer (1024)|825|91|
|slice (0, 64)|203,608|57|
|slice (0, 512)|36,125|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:54:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6334.468492398966,"samples":2},{"name":"new Blob (1024)","opsSec":798.170749045239,"samples":2},{"name":"text (128)","opsSec":6481.878126620119,"samples":6},{"name":"text (1024)","opsSec":827.6999183060182,"samples":3},{"name":"arrayBuffer (128)","opsSec":6496.892331436602,"samples":4},{"name":"arrayBuffer (1024)","opsSec":825.1620181981906,"samples":3},{"name":"slice (0, 64)","opsSec":203607.919681793,"samples":3},{"name":"slice (0, 512)","opsSec":36124.58903672448,"samples":6}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,877|58|
|[True conditional] Using constructor name|217,273|95|
|[True conditional] Check if property is valid then instanceof |222,110|100|
|[False conditional] Using instanceof only|145,116,176|83|
|[False conditional] Using constructor name|145,303,080|83|
|[False conditional] Check if property is valid then instanceof |147,403,750|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262876.9631897255,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217272.66937502782,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":222109.51585693946,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":145116175.907225,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":145303080.03071555,"samples":5},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":147403750.13155952,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,543|93|
|crypto.verify('RSA-SHA256')|7,452|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7543.22126115289,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":7451.555665211268,"samples":3}]}-->
