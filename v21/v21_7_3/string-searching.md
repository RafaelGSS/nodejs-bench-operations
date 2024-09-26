## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,769,278|3884640|
|Using indexof|7,798,396|3899199|
|Using RegExp.test|7,256,853|3628427|
|Using RegExp.text with cached regex pattern|7,306,610|3653306|
|Using new RegExp.test|3,326,510|1663256|
|Using new RegExp.test with cached regex pattern|3,612,684|1806343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:57:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7769278.2752245,"samples":3884640},{"name":"Using indexof","opsSec":7798396.549512986,"samples":3899199},{"name":"Using RegExp.test","opsSec":7256853.608148307,"samples":3628427},{"name":"Using RegExp.text with cached regex pattern","opsSec":7306610.567950998,"samples":3653306},{"name":"Using new RegExp.test","opsSec":3326510.223629264,"samples":1663256},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3612684.45374569,"samples":1806343}]}-->
