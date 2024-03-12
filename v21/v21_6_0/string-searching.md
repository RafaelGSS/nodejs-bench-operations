## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|827,246,493|91|
|Using indexof|834,758,889|95|
|Using RegExp.test|17,230,510|91|
|Using RegExp.text with cached regex pattern|17,670,422|95|
|Using new RegExp.test|4,622,265|96|
|Using new RegExp.test with cached regex pattern|5,136,248|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":827246492.9247993,"samples":8},{"name":"Using indexof","opsSec":834758889.3994161,"samples":7},{"name":"Using RegExp.test","opsSec":17230509.647239905,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17670422.393615462,"samples":5},{"name":"Using new RegExp.test","opsSec":4622265.252634564,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5136247.887870352,"samples":5}]}-->
