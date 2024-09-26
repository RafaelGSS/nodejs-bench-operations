## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,086,306|4043154|
|Using indexof|8,079,033|4039517|
|Using RegExp.test|7,494,932|3747467|
|Using RegExp.text with cached regex pattern|7,562,165|3781083|
|Using new RegExp.test|3,422,465|1711233|
|Using new RegExp.test with cached regex pattern|3,710,162|1855082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:58:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8086306.382736088,"samples":4043154},{"name":"Using indexof","opsSec":8079033.903072282,"samples":4039517},{"name":"Using RegExp.test","opsSec":7494932.545978994,"samples":3747467},{"name":"Using RegExp.text with cached regex pattern","opsSec":7562165.274014556,"samples":3781083},{"name":"Using new RegExp.test","opsSec":3422465.1306736413,"samples":1711233},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3710162.374956563,"samples":1855082}]}-->
