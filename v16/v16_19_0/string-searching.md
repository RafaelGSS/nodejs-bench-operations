## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,908,077|98|
|Using indexof|849,932,811|98|
|Using RegExp.test|15,159,420|100|
|Using RegExp.text with cached regex pattern|15,749,503|97|
|Using new RegExp.test|4,965,723|96|
|Using new RegExp.test with cached regex pattern|5,874,491|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:50:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":15908076.638456477,"samples":5},{"name":"Using indexof","opsSec":849932811.0768857,"samples":7},{"name":"Using RegExp.test","opsSec":15159419.53895886,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15749503.249463256,"samples":6},{"name":"Using new RegExp.test","opsSec":4965723.112324098,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5874490.509387312,"samples":5}]}-->
