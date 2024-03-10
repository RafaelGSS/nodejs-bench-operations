## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,671,545|97|
|Using indexof|824,222,070|96|
|Using RegExp.test|16,888,863|94|
|Using RegExp.text with cached regex pattern|17,679,079|97|
|Using new RegExp.test|4,564,882|92|
|Using new RegExp.test with cached regex pattern|5,113,626|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821671545.0958134,"samples":6},{"name":"Using indexof","opsSec":824222070.0004787,"samples":8},{"name":"Using RegExp.test","opsSec":16888863.222291186,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":17679078.95115059,"samples":5},{"name":"Using new RegExp.test","opsSec":4564881.878687553,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5113625.889352267,"samples":4}]}-->
