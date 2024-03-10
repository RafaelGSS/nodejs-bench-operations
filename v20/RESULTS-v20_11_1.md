## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,367,488|97|
|Using dot notation|846,421,153|99|
|Using define property (writable)|4,125,919|97|
|Using define property initialized (writable)|6,347,504|96|
|Using define property (getter)|2,500,459|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":847367488.4391268,"samples":6},{"name":"Using dot notation","opsSec":846421152.9888067,"samples":6},{"name":"Using define property (writable)","opsSec":4125918.7905529486,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6347503.550266142,"samples":5},{"name":"Using define property (getter)","opsSec":2500458.648157595,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.487ms
array.push|1,000,000|28.773ms
new Array(length)|1,000,000|6.424ms
array.push|100,000,000|1,097.994ms
new Array(length)|100,000,000|3,539.986ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.239ms
new Array(length)|10,000|0.174ms
array.push|1,000,000|20.478ms
new Array(length)|1,000,000|2.722ms
array.push|100,000,000|1,327.184ms
new Array(length)|100,000,000|3,515.38ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|577|82|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":577.2280433464429,"samples":3},{"name":"Array.from","opsSec":20.985733512543536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,864,967|95|
|[async] async function|17,754,571|86|
|[async] function|182,507|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846864967.2407211,"samples":7},{"name":"[async] async function","opsSec":17754571.47143125,"samples":6},{"name":"[async] function","opsSec":182507.42247259212,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,230|89|
|new Blob (1024)|664|76|
|text (128)|5,727|85|
|text (1024)|735|88|
|arrayBuffer (128)|5,832|88|
|arrayBuffer (1024)|718|86|
|slice (0, 64)|74,260|72|
|slice (0, 512)|20,784|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5230.404695873954,"samples":5},{"name":"new Blob (1024)","opsSec":664.0996036826341,"samples":2},{"name":"text (128)","opsSec":5727.4667541725175,"samples":6},{"name":"text (1024)","opsSec":734.5118837809699,"samples":3},{"name":"arrayBuffer (128)","opsSec":5832.284951875313,"samples":3},{"name":"arrayBuffer (1024)","opsSec":717.9712122284149,"samples":3},{"name":"slice (0, 64)","opsSec":74260.06412443666,"samples":4},{"name":"slice (0, 512)","opsSec":20784.316908195964,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,208|55|
|[True conditional] Using constructor name|190,668|92|
|[True conditional] Check if property is valid then instanceof |194,148|93|
|[False conditional] Using instanceof only|845,864,883|97|
|[False conditional] Using constructor name|846,022,624|95|
|[False conditional] Check if property is valid then instanceof |846,349,677|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":237208.41353941304,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":190667.91652097728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":194147.82501762707,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":845864883.1897147,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":846022623.8702893,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846349676.7456006,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,781|92|
|crypto.verify('RSA-SHA256')|6,719|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6780.676814285697,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6719.052117422278,"samples":3}]}-->
