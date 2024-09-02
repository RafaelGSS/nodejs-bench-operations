## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,599,019|4299510|
|Using indexof|8,412,892|4206447|
|Using RegExp.test|7,767,118|3883584|
|Using RegExp.text with cached regex pattern|7,846,557|3923280|
|Using new RegExp.test|3,481,354|1740678|
|Using new RegExp.test with cached regex pattern|3,770,895|1885448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:13:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8599019.845166568,"samples":4299510},{"name":"Using indexof","opsSec":8412892.182807572,"samples":4206447},{"name":"Using RegExp.test","opsSec":7767118.07299633,"samples":3883584},{"name":"Using RegExp.text with cached regex pattern","opsSec":7846557.190953212,"samples":3923280},{"name":"Using new RegExp.test","opsSec":3481354.5238946197,"samples":1740678},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3770895.939644491,"samples":1885448}]}-->
