## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,777,029|99|
|Using indexof|847,651,139|94|
|Using RegExp.test|16,155,902|100|
|Using RegExp.text with cached regex pattern|16,761,242|100|
|Using new RegExp.test|4,412,602|97|
|Using new RegExp.test with cached regex pattern|5,092,002|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:52:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":16777028.704962563,"samples":4},{"name":"Using indexof","opsSec":847651138.9475245,"samples":6},{"name":"Using RegExp.test","opsSec":16155901.7751239,"samples":10},{"name":"Using RegExp.text with cached regex pattern","opsSec":16761241.557073602,"samples":7},{"name":"Using new RegExp.test","opsSec":4412601.553944595,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5092001.686833273,"samples":5}]}-->
