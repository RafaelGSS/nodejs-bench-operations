## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,557,137|95|
|Using indexof|909,274,928|95|
|Using RegExp.test|17,864,152|99|
|Using RegExp.text with cached regex pattern|18,854,951|98|
|Using new RegExp.test|3,910,815|97|
|Using new RegExp.test with cached regex pattern|4,410,666|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:34:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19557137.40041973,"samples":4},{"name":"Using indexof","opsSec":909274927.810384,"samples":6},{"name":"Using RegExp.test","opsSec":17864151.638627034,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":18854951.130531296,"samples":6},{"name":"Using new RegExp.test","opsSec":3910814.521348051,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4410666.040207417,"samples":5}]}-->
