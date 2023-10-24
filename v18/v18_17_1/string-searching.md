## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|711,731,475|94|
|Using indexof|712,599,543|98|
|Using RegExp.test|11,671,783|94|
|Using RegExp.text with cached regex pattern|12,285,599|97|
|Using new RegExp.test|3,046,856|96|
|Using new RegExp.test with cached regex pattern|3,489,798|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":711731475.2123533,"samples":6},{"name":"Using indexof","opsSec":712599542.9819148,"samples":7},{"name":"Using RegExp.test","opsSec":11671782.882535143,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12285598.588140802,"samples":5},{"name":"Using new RegExp.test","opsSec":3046856.2922295663,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3489798.0332209696,"samples":5}]}-->
