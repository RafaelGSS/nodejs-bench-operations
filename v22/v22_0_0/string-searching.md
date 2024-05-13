## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,061,837|8030919|
|Using indexof|16,085,973|8042987|
|Using RegExp.test|7,857,109|3928555|
|Using RegExp.text with cached regex pattern|7,933,751|3966876|
|Using new RegExp.test|3,615,639|1807820|
|Using new RegExp.test with cached regex pattern|3,836,017|1918009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16061837.935747126,"samples":8030919},{"name":"Using indexof","opsSec":16085973.163487593,"samples":8042987},{"name":"Using RegExp.test","opsSec":7857109.780008541,"samples":3928555},{"name":"Using RegExp.text with cached regex pattern","opsSec":7933751.888924203,"samples":3966876},{"name":"Using new RegExp.test","opsSec":3615639.493809484,"samples":1807820},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3836017.455287137,"samples":1918009}]}-->
