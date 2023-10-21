## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|572,261,950|94|
|Using indexof|592,834,927|93|
|Using RegExp.test|11,073,476|99|
|Using RegExp.text with cached regex pattern|11,721,758|97|
|Using new RegExp.test|3,057,441|97|
|Using new RegExp.test with cached regex pattern|3,487,838|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":572261949.8094096,"samples":5},{"name":"Using indexof","opsSec":592834927.4163827,"samples":8},{"name":"Using RegExp.test","opsSec":11073475.890387768,"samples":10},{"name":"Using RegExp.text with cached regex pattern","opsSec":11721758.012208402,"samples":4},{"name":"Using new RegExp.test","opsSec":3057441.417222986,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3487838.0069420636,"samples":6}]}-->
