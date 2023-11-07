## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,210,832|99|
|Using indexof|846,752,253|96|
|Using RegExp.test|16,428,218|99|
|Using RegExp.text with cached regex pattern|16,985,902|99|
|Using new RegExp.test|4,895,095|95|
|Using new RegExp.test with cached regex pattern|5,954,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17210831.740558516,"samples":6},{"name":"Using indexof","opsSec":846752252.6599853,"samples":7},{"name":"Using RegExp.test","opsSec":16428217.644120723,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":16985901.951608106,"samples":5},{"name":"Using new RegExp.test","opsSec":4895095.097784198,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5954897.874729524,"samples":5}]}-->
