## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|137,347,945|68679082|
|Using indexof|15,676,536|7838271|
|Using RegExp.test|13,297,309|6649900|
|Using RegExp.text with cached regex pattern|13,555,588|6777796|
|Using new RegExp.test|4,369,931|2185097|
|Using new RegExp.test with cached regex pattern|5,118,011|2559018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":137347945.31286874,"samples":68679082},{"name":"Using indexof","opsSec":15676536.889448972,"samples":7838271},{"name":"Using RegExp.test","opsSec":13297309.467126045,"samples":6649900},{"name":"Using RegExp.text with cached regex pattern","opsSec":13555588.611102847,"samples":6777796},{"name":"Using new RegExp.test","opsSec":4369931.734177042,"samples":2185097},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5118011.597320705,"samples":2559018}]}-->
