## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,706,114|95|
|Using indexof|851,027,217|94|
|Using RegExp.test|16,943,922|98|
|Using RegExp.text with cached regex pattern|17,470,383|100|
|Using new RegExp.test|4,740,212|97|
|Using new RegExp.test with cached regex pattern|5,542,879|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:59:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":847706113.7235386,"samples":6},{"name":"Using indexof","opsSec":851027217.3782984,"samples":8},{"name":"Using RegExp.test","opsSec":16943922.434333872,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17470382.71604766,"samples":7},{"name":"Using new RegExp.test","opsSec":4740211.736377912,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5542879.109951419,"samples":5}]}-->
