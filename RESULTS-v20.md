## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,898,575|8949288|
|Using dot notation|16,941,992|8470997|
|Using define property (writable)|3,320,543|1660272|
|Using define property initialized (writable)|4,123,583|2061792|
|Using define property (getter)|1,838,887|919444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17898575.248280033,"samples":8949288},{"name":"Using dot notation","opsSec":16941992.37344935,"samples":8470997},{"name":"Using define property (writable)","opsSec":3320543.9468424316,"samples":1660272},{"name":"Using define property initialized (writable)","opsSec":4123583.7031132737,"samples":2061792},{"name":"Using define property (getter)","opsSec":1838887.5586644416,"samples":919444}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.091ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.275ms
new Array(length)|10,000|0.305ms
array.push|1,000,000|30.047ms
new Array(length)|1,000,000|7.305ms
array.push|100,000,000|1,812.531ms
new Array(length)|100,000,000|4,505.19ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.236ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|26.085ms
new Array(length)|1,000,000|4.555ms
array.push|100,000,000|2,525.456ms
new Array(length)|100,000,000|4,135.22ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|269|135|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":269.1273293366554,"samples":135},{"name":"Array.from","opsSec":22.773837331410455,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|759|384|
|new Blob (1024)|528|265|
|text (128)|4,517|2259|
|text (1024)|569|285|
|arrayBuffer (128)|4,608|2305|
|arrayBuffer (1024)|571|286|
|slice (0, 64)|65,873|32937|
|slice (0, 512)|26,234|13118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":759.2373396862507,"samples":384},{"name":"new Blob (1024)","opsSec":528.8338082823037,"samples":265},{"name":"text (128)","opsSec":4517.064407551928,"samples":2259},{"name":"text (1024)","opsSec":569.9236917770845,"samples":285},{"name":"arrayBuffer (128)","opsSec":4608.69119622137,"samples":2305},{"name":"arrayBuffer (1024)","opsSec":571.5109557890928,"samples":286},{"name":"slice (0, 64)","opsSec":65873.9250354659,"samples":32937},{"name":"slice (0, 512)","opsSec":26234.588893933884,"samples":13118}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|276,561|138283|
|[True conditional] Using constructor name|294,660|147331|
|[True conditional] Check if property is valid then instanceof |301,799|150900|
|[False conditional] Using instanceof only|19,438,707|9719354|
|[False conditional] Using constructor name|19,524,779|9762390|
|[False conditional] Check if property is valid then instanceof |17,729,873|8864937|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":276561.3161573272,"samples":138283},{"name":"[True conditional] Using constructor name","opsSec":294660.9339165378,"samples":147331},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":301799.57023732027,"samples":150900},{"name":"[False conditional] Using instanceof only","opsSec":19438707.572121285,"samples":9719354},{"name":"[False conditional] Using constructor name","opsSec":19524779.843820743,"samples":9762390},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17729873.7517484,"samples":8864937}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,015|3508|
|crypto.verify('RSA-SHA256')|6,957|3479|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:54:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7015.40544438876,"samples":3508},{"name":"crypto.verify('RSA-SHA256')","opsSec":6957.863639788312,"samples":3479}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,309,676|654839|
|fromUnixToISOString(new Date())|1,871,543|935772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1309676.5829295898,"samples":654839},{"name":"fromUnixToISOString(new Date())","opsSec":1871543.5021691376,"samples":935772}]}-->
