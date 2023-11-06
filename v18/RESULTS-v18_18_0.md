## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,846,897|98|
|Using dot notation|844,071,067|94|
|Using define property (writable)|4,301,101|99|
|Using define property initialized (writable)|5,948,449|98|
|Using define property (getter)|2,186,211|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844846896.9336392,"samples":6},{"name":"Using dot notation","opsSec":844071066.6024603,"samples":5},{"name":"Using define property (writable)","opsSec":4301101.154174546,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5948449.293722699,"samples":6},{"name":"Using define property (getter)","opsSec":2186211.328306995,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.27ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|32.493ms
new Array(length)|1,000,000|6.032ms
array.push|100,000,000|1,846.19ms
new Array(length)|100,000,000|4,096.915ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.465ms
new Array(length)|10,000|3.262ms
array.push|1,000,000|289.307ms
new Array(length)|1,000,000|4.609ms
array.push|100,000,000|2,240.148ms
new Array(length)|100,000,000|4,426.29ms

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|680,436,295|88|
|[async] async function|7,762,589|79|
|[async] function|162,482|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":680436294.9396358,"samples":5},{"name":"[async] async function","opsSec":7762589.001240709,"samples":8},{"name":"[async] function","opsSec":162482.3055375439,"samples":3}]}-->
