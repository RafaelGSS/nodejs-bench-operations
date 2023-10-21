## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|715,177,729|95|
|Using indexof|715,561,007|93|
|Using RegExp.test|11,233,807|97|
|Using RegExp.text with cached regex pattern|11,769,016|96|
|Using new RegExp.test|3,025,329|98|
|Using new RegExp.test with cached regex pattern|3,436,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":715177728.5287883,"samples":6},{"name":"Using indexof","opsSec":715561007.2557237,"samples":9},{"name":"Using RegExp.test","opsSec":11233807.220113022,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11769015.727174401,"samples":5},{"name":"Using new RegExp.test","opsSec":3025328.651752171,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3436323.464339445,"samples":4}]}-->
