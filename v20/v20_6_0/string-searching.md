## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,478,564|94|
|Using indexof|714,403,477|98|
|Using RegExp.test|11,052,755|97|
|Using RegExp.text with cached regex pattern|11,673,266|98|
|Using new RegExp.test|3,264,592|98|
|Using new RegExp.test with cached regex pattern|3,940,151|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":714478563.7332283,"samples":6},{"name":"Using indexof","opsSec":714403476.5036268,"samples":7},{"name":"Using RegExp.test","opsSec":11052754.512865992,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11673265.827805009,"samples":7},{"name":"Using new RegExp.test","opsSec":3264592.0663516186,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3940150.5454126983,"samples":6}]}-->
