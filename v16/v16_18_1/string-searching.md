## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,293,860|99|
|Using indexof|849,990,859|100|
|Using RegExp.test|15,675,581|96|
|Using RegExp.text with cached regex pattern|16,306,389|100|
|Using new RegExp.test|5,232,629|99|
|Using new RegExp.test with cached regex pattern|6,136,885|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:50:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":16293859.970578752,"samples":5},{"name":"Using indexof","opsSec":849990858.8447713,"samples":8},{"name":"Using RegExp.test","opsSec":15675580.868070917,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":16306389.364538735,"samples":6},{"name":"Using new RegExp.test","opsSec":5232628.65940039,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6136885.244659559,"samples":7}]}-->
