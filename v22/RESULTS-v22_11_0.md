## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,354,657|52677580|
|Using dot notation|72,858,303|36505473|
|Using define property (writable)|4,933,376|2466690|
|Using define property initialized (writable)|6,866,553|3433432|
|Using define property (getter)|2,455,899|1227986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105354657.66899224,"samples":52677580},{"name":"Using dot notation","opsSec":72858303.48270552,"samples":36505473},{"name":"Using define property (writable)","opsSec":4933376.793305084,"samples":2466690},{"name":"Using define property initialized (writable)","opsSec":6866553.769100712,"samples":3433432},{"name":"Using define property (getter)","opsSec":2455899.742517776,"samples":1227986}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.006ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|28.305ms
new Array(length)|1,000,000|7.137ms
array.push|100,000,000|1,851.871ms
new Array(length)|100,000,000|3,945.689ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|18.209ms
new Array(length)|10,000|6.65ms
array.push|1,000,000|142.99ms
new Array(length)|1,000,000|7.163ms
array.push|100,000,000|1,979.962ms
new Array(length)|100,000,000|4,548.412ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|332|167|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":332.7602491157997,"samples":167},{"name":"Array.from","opsSec":24.69608733714296,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2284|
|new Blob (1024)|625|315|
|text (128)|3,738|1871|
|text (1024)|536|275|
|arrayBuffer (128)|4,329|2179|
|arrayBuffer (1024)|537|269|
|slice (0, 64)|146,774|77711|
|slice (0, 512)|31,704|15853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4567.2908184854505,"samples":2284},{"name":"new Blob (1024)","opsSec":625.721714129238,"samples":315},{"name":"text (128)","opsSec":3738.440234777803,"samples":1871},{"name":"text (1024)","opsSec":536.4502379639611,"samples":275},{"name":"arrayBuffer (128)","opsSec":4329.035411084507,"samples":2179},{"name":"arrayBuffer (1024)","opsSec":537.3876929392374,"samples":269},{"name":"slice (0, 64)","opsSec":146774.1617905084,"samples":77711},{"name":"slice (0, 512)","opsSec":31704.75451042381,"samples":15853}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|455,614|228102|
|[True conditional] Using constructor name|368,301|184151|
|[True conditional] Check if property is valid then instanceof |367,092|183550|
|[False conditional] Using instanceof only|94,613,392|47306709|
|[False conditional] Using constructor name|94,706,984|47375194|
|[False conditional] Check if property is valid then instanceof |96,160,248|48097177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":455614.3075140707,"samples":228102},{"name":"[True conditional] Using constructor name","opsSec":368301.585292415,"samples":184151},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":367092.7440448212,"samples":183550},{"name":"[False conditional] Using instanceof only","opsSec":94613392.2651573,"samples":47306709},{"name":"[False conditional] Using constructor name","opsSec":94706984.35731095,"samples":47375194},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96160248.84454231,"samples":48097177}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,641|3321|
|crypto.verify('RSA-SHA256')|6,809|3405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6641.83000900275,"samples":3321},{"name":"crypto.verify('RSA-SHA256')","opsSec":6809.023654098239,"samples":3405}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,405,288|702661|
|fromUnixToISOString(new Date())|2,152,480|1076241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1405288.6749843615,"samples":702661},{"name":"fromUnixToISOString(new Date())","opsSec":2152480.4114694563,"samples":1076241}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,164|9583|
|Intl.DateTimeFormat().format(new Date())|19,139|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,163|9582|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,057|9210|
|Reusing Intl.DateTimeFormat()|606,398|303387|
|Date.toLocaleDateString()|1,103,192|551736|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,412|11707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19164.043351173845,"samples":9583},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19139.90980127547,"samples":9572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19163.591470557032,"samples":9582},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18057.328772061235,"samples":9210},{"name":"Reusing Intl.DateTimeFormat()","opsSec":606398.0889734606,"samples":303387},{"name":"Date.toLocaleDateString()","opsSec":1103192.1223649401,"samples":551736},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23412.304059518538,"samples":11707}]}-->
