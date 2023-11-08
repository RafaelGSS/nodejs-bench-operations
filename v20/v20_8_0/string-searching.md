## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,108,534|100|
|Using indexof|853,468,205|94|
|Using RegExp.test|16,362,688|95|
|Using RegExp.text with cached regex pattern|17,117,795|99|
|Using new RegExp.test|4,735,720|99|
|Using new RegExp.test with cached regex pattern|5,642,908|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:58:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":854108534.4009155,"samples":7},{"name":"Using indexof","opsSec":853468204.575713,"samples":5},{"name":"Using RegExp.test","opsSec":16362687.914534708,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17117794.941742342,"samples":5},{"name":"Using new RegExp.test","opsSec":4735719.863370517,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5642907.937364835,"samples":4}]}-->
