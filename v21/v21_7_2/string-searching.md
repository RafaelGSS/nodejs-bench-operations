## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,207,942|7603972|
|Using indexof|15,299,501|7649751|
|Using RegExp.test|8,219,425|4109713|
|Using RegExp.text with cached regex pattern|8,276,553|4138277|
|Using new RegExp.test|3,625,998|1813000|
|Using new RegExp.test with cached regex pattern|3,893,803|1946902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:22:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15207942.844186047,"samples":7603972},{"name":"Using indexof","opsSec":15299501.755198007,"samples":7649751},{"name":"Using RegExp.test","opsSec":8219425.210934135,"samples":4109713},{"name":"Using RegExp.text with cached regex pattern","opsSec":8276553.784792125,"samples":4138277},{"name":"Using new RegExp.test","opsSec":3625998.520584135,"samples":1813000},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3893803.4003501916,"samples":1946902}]}-->
