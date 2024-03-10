## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,351,323|97|
|Using dot notation|820,319,174|94|
|Using define property (writable)|4,201,787|93|
|Using define property initialized (writable)|6,190,788|95|
|Using define property (getter)|2,410,613|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821351323.368965,"samples":7},{"name":"Using dot notation","opsSec":820319174.2976774,"samples":6},{"name":"Using define property (writable)","opsSec":4201786.648696174,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6190788.4554243125,"samples":4},{"name":"Using define property (getter)","opsSec":2410612.572721549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.005ms
array.push|100|0.084ms
new Array(length)|100|0.015ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|23.229ms
new Array(length)|1,000,000|5.658ms
array.push|100,000,000|978.339ms
new Array(length)|100,000,000|3,552.555ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|18.081ms
new Array(length)|1,000,000|6.181ms
array.push|100,000,000|1,131.526ms
new Array(length)|100,000,000|3,530.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|621|87|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":621.375556640941,"samples":5},{"name":"Array.from","opsSec":22.334616281993455,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,665,091|95|
|[async] async function|17,336,653|89|
|[async] function|186,335|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822665091.0789245,"samples":7},{"name":"[async] async function","opsSec":17336653.28136399,"samples":10},{"name":"[async] function","opsSec":186335.1928222448,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,573|93|
|new Blob (1024)|699|77|
|text (128)|5,874|88|
|text (1024)|744|89|
|arrayBuffer (128)|5,845|87|
|arrayBuffer (1024)|749|89|
|slice (0, 64)|197,053|58|
|slice (0, 512)|30,079|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5573.04332025319,"samples":7},{"name":"new Blob (1024)","opsSec":699.3468510897019,"samples":2},{"name":"text (128)","opsSec":5873.502290047546,"samples":6},{"name":"text (1024)","opsSec":744.4357347965031,"samples":2},{"name":"arrayBuffer (128)","opsSec":5844.631103883418,"samples":6},{"name":"arrayBuffer (1024)","opsSec":748.5117203317021,"samples":4},{"name":"slice (0, 64)","opsSec":197053.04080328834,"samples":3},{"name":"slice (0, 512)","opsSec":30079.48107779887,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,709|54|
|[True conditional] Using constructor name|202,842|93|
|[True conditional] Check if property is valid then instanceof |205,905|96|
|[False conditional] Using instanceof only|823,419,857|97|
|[False conditional] Using constructor name|822,744,771|97|
|[False conditional] Check if property is valid then instanceof |824,372,608|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246708.61456165017,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202842.47968187582,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":205904.6384825214,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":823419856.7551914,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":822744770.7873706,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824372608.2806928,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,900|96|
|crypto.verify('RSA-SHA256')|6,823|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6900.054993143359,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6823.142001641683,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,484,098|92|
|fromUnixToISOString(new Date())|2,214,258|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1484097.934859333,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2214257.53786107,"samples":6}]}-->
