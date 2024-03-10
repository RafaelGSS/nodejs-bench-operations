## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|820,729,754|97|
|Using indexof|820,776,797|96|
|Using RegExp.test|16,064,031|95|
|Using RegExp.text with cached regex pattern|17,027,083|96|
|Using new RegExp.test|3,521,880|97|
|Using new RegExp.test with cached regex pattern|3,951,700|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":820729753.9337019,"samples":6},{"name":"Using indexof","opsSec":820776796.5191767,"samples":6},{"name":"Using RegExp.test","opsSec":16064031.003121888,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17027083.180890724,"samples":5},{"name":"Using new RegExp.test","opsSec":3521879.882157515,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3951699.586505572,"samples":5}]}-->
