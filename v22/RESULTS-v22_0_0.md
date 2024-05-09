## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,061,051|8030526|
|Using dot notation|16,102,673|8051337|
|Using define property (writable)|3,538,553|1769277|
|Using define property initialized (writable)|4,447,855|2223928|
|Using define property (getter)|2,220,497|1110249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16061051.196938513,"samples":8030526},{"name":"Using dot notation","opsSec":16102673.967783893,"samples":8051337},{"name":"Using define property (writable)","opsSec":3538553.547089503,"samples":1769277},{"name":"Using define property initialized (writable)","opsSec":4447855.350609663,"samples":2223928},{"name":"Using define property (getter)","opsSec":2220497.9733600337,"samples":1110249}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.171ms
array.push|1,000,000|21.194ms
new Array(length)|1,000,000|15.355ms
array.push|100,000,000|2,003.918ms
new Array(length)|100,000,000|4,025.903ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|17.575ms
new Array(length)|1,000,000|7.383ms
array.push|100,000,000|2,597.502ms
new Array(length)|100,000,000|4,097.338ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|252|127|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:41:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":252.34223315711395,"samples":127},{"name":"Array.from","opsSec":24.16822564890688,"samples":13}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,096|167549|
|[True conditional] Using constructor name|336,930|168466|
|[True conditional] Check if property is valid then instanceof |342,239|171120|
|[False conditional] Using instanceof only|16,174,550|8087276|
|[False conditional] Using constructor name|16,207,703|8103852|
|[False conditional] Check if property is valid then instanceof |16,225,057|8112529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335096.7869496035,"samples":167549},{"name":"[True conditional] Using constructor name","opsSec":336930.21898695634,"samples":168466},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342239.9883638607,"samples":171120},{"name":"[False conditional] Using instanceof only","opsSec":16174550.285545165,"samples":8087276},{"name":"[False conditional] Using constructor name","opsSec":16207703.48136761,"samples":8103852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16225057.967557132,"samples":8112529}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,157|3579|
|crypto.verify('RSA-SHA256')|7,136|3569|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:02:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7157.042273231158,"samples":3579},{"name":"crypto.verify('RSA-SHA256')","opsSec":7136.175365593155,"samples":3569}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,844|522923|
|Using brackets {}|1,066,987|533494|
|Using '' + |1,065,281|532641|
|Using date.toString()|1,160,235|580118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:17:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1045844.6236684086,"samples":522923},{"name":"Using brackets {}","opsSec":1066987.6052147849,"samples":533494},{"name":"Using '' + ","opsSec":1065281.5909313469,"samples":532641},{"name":"Using date.toString()","opsSec":1160235.5034188696,"samples":580118}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,384,837|1692419|
|Using delete property (proto: null)|9,082,113|4541057|
|Using delete property (cached proto: null)|3,308,712|1654357|
|Using undefined assignment|16,117,812|8058907|
|Using undefined assignment (proto: null)|8,615,860|4307931|
|Using undefined property (cached proto: null)|16,149,575|8074788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3384837.6141289324,"samples":1692419},{"name":"Using delete property (proto: null)","opsSec":9082113.945510445,"samples":4541057},{"name":"Using delete property (cached proto: null)","opsSec":3308712.2000602908,"samples":1654357},{"name":"Using undefined assignment","opsSec":16117812.581603399,"samples":8058907},{"name":"Using undefined assignment (proto: null)","opsSec":8615860.173427623,"samples":4307931},{"name":"Using undefined property (cached proto: null)","opsSec":16149575.806213072,"samples":8074788}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|321,784|160893|
|NodeError|311,913|155957|
|NodeError Range|325,192|162597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:30:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":321784.22439465014,"samples":160893},{"name":"NodeError","opsSec":311913.6475375948,"samples":155957},{"name":"NodeError Range","opsSec":325192.9418222379,"samples":162597}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,620,223|810112|
|Function returning explicitly undefined|1,675,684|837843|
|Function returning implicitly undefined|1,704,154|852078|
|Function returning string|1,660,576|830289|
|Function returning integer|1,714,568|857285|
|Function returning float|1,682,814|841408|
|Function returning functions|1,665,903|832952|
|Function returning arrow functions|1,677,013|838507|
|Function returning empty object|1,698,799|849400|
|Function returning empty array|1,709,880|854941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1620223.8185347738,"samples":810112},{"name":"Function returning explicitly undefined","opsSec":1675684.5823715522,"samples":837843},{"name":"Function returning implicitly undefined","opsSec":1704154.8616249112,"samples":852078},{"name":"Function returning string","opsSec":1660576.7977417891,"samples":830289},{"name":"Function returning integer","opsSec":1714568.117404256,"samples":857285},{"name":"Function returning float","opsSec":1682814.6874032698,"samples":841408},{"name":"Function returning functions","opsSec":1665903.2403487866,"samples":832952},{"name":"Function returning arrow functions","opsSec":1677013.9362737995,"samples":838507},{"name":"Function returning empty object","opsSec":1698799.0418759962,"samples":849400},{"name":"Function returning empty array","opsSec":1709880.676550297,"samples":854941}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,852,311|7426156|
|using Array.includes (first item)|15,284,973|7642487|
|Using raw comparison|16,243,132|8121567|
|Using raw comparison (first item)|16,173,084|8086543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:45:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14852311.732657142,"samples":7426156},{"name":"using Array.includes (first item)","opsSec":15284973.602596363,"samples":7642487},{"name":"Using raw comparison","opsSec":16243132.408144474,"samples":8121567},{"name":"Using raw comparison (first item)","opsSec":16173084.091550073,"samples":8086543}]}-->
