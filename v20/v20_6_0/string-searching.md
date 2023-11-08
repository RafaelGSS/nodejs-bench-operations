## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|853,291,900|96|
|Using indexof|853,215,849|101|
|Using RegExp.test|16,238,785|99|
|Using RegExp.text with cached regex pattern|16,902,354|100|
|Using new RegExp.test|4,839,532|97|
|Using new RegExp.test with cached regex pattern|5,728,686|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:56:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":853291900.3183913,"samples":6},{"name":"Using indexof","opsSec":853215849.3857241,"samples":6},{"name":"Using RegExp.test","opsSec":16238784.540206367,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":16902353.838404685,"samples":5},{"name":"Using new RegExp.test","opsSec":4839532.124799461,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5728685.749290961,"samples":5}]}-->
