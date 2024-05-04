## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|910,644,801|99|
|Using indexof|911,432,621|98|
|Using RegExp.test|18,841,126|94|
|Using RegExp.text with cached regex pattern|19,623,929|97|
|Using new RegExp.test|5,118,286|96|
|Using new RegExp.test with cached regex pattern|5,689,864|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:38:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":910644801.285094,"samples":6},{"name":"Using indexof","opsSec":911432621.3864248,"samples":10},{"name":"Using RegExp.test","opsSec":18841125.534600124,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":19623928.889261287,"samples":5},{"name":"Using new RegExp.test","opsSec":5118286.1457346175,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5689863.739706883,"samples":5}]}-->
