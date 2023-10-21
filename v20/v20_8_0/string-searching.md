## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,602,666|96|
|Using indexof|716,158,200|96|
|Using RegExp.test|12,003,624|98|
|Using RegExp.text with cached regex pattern|12,664,094|98|
|Using new RegExp.test|3,268,032|97|
|Using new RegExp.test with cached regex pattern|3,956,766|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":714602665.5474858,"samples":7},{"name":"Using indexof","opsSec":716158200.0847802,"samples":9},{"name":"Using RegExp.test","opsSec":12003623.872507334,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12664094.004841112,"samples":5},{"name":"Using new RegExp.test","opsSec":3268031.8320975862,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3956766.3158374634,"samples":4}]}-->
