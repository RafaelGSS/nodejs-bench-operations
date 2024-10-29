## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|154,038,479|77019262|
|Using indexof|15,850,210|7925108|
|Using RegExp.test|14,215,091|7107944|
|Using RegExp.text with cached regex pattern|15,191,409|7595705|
|Using new RegExp.test|4,322,455|2161614|
|Using new RegExp.test with cached regex pattern|4,850,206|2425285|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:51:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":154038479.94499475,"samples":77019262},{"name":"Using indexof","opsSec":15850210.769430446,"samples":7925108},{"name":"Using RegExp.test","opsSec":14215091.755850386,"samples":7107944},{"name":"Using RegExp.text with cached regex pattern","opsSec":15191409.726554627,"samples":7595705},{"name":"Using new RegExp.test","opsSec":4322455.948853152,"samples":2161614},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4850206.903810767,"samples":2425285}]}-->
