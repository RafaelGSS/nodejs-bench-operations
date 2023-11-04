## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|610,151,954|88|
|Using indexof|620,949,758|89|
|Using RegExp.test|8,784,493|86|
|Using RegExp.text with cached regex pattern|10,211,038|91|
|Using new RegExp.test|2,772,178|89|
|Using new RegExp.test with cached regex pattern|3,192,327|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:55:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":610151954.0970978,"samples":6},{"name":"Using indexof","opsSec":620949758.1836402,"samples":7},{"name":"Using RegExp.test","opsSec":8784493.158865856,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":10211038.344543811,"samples":5},{"name":"Using new RegExp.test","opsSec":2772177.9201582656,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3192326.9114144277,"samples":6}]}-->
