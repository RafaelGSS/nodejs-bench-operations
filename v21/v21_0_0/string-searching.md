## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,578,415|8289208|
|Using indexof|16,631,756|8315879|
|Using RegExp.test|7,318,641|3659321|
|Using RegExp.text with cached regex pattern|8,610,200|4305101|
|Using new RegExp.test|3,578,333|1789167|
|Using new RegExp.test with cached regex pattern|3,708,037|1854019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:43:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16578415.958682952,"samples":8289208},{"name":"Using indexof","opsSec":16631756.544913521,"samples":8315879},{"name":"Using RegExp.test","opsSec":7318641.312972864,"samples":3659321},{"name":"Using RegExp.text with cached regex pattern","opsSec":8610200.815259423,"samples":4305101},{"name":"Using new RegExp.test","opsSec":3578333.7946862243,"samples":1789167},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3708037.152748068,"samples":1854019}]}-->
