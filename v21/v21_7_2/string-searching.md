## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,228,348|4114175|
|Using indexof|8,157,795|4078898|
|Using RegExp.test|7,543,442|3771722|
|Using RegExp.text with cached regex pattern|7,575,204|3787603|
|Using new RegExp.test|3,370,275|1685138|
|Using new RegExp.test with cached regex pattern|3,689,512|1844758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8228348.699903432,"samples":4114175},{"name":"Using indexof","opsSec":8157795.135248552,"samples":4078898},{"name":"Using RegExp.test","opsSec":7543442.77790258,"samples":3771722},{"name":"Using RegExp.text with cached regex pattern","opsSec":7575204.909138486,"samples":3787603},{"name":"Using new RegExp.test","opsSec":3370275.1978863454,"samples":1685138},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3689512.841768502,"samples":1844758}]}-->
