## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|613,176,406|86|
|Using indexof|647,677,625|90|
|Using RegExp.test|10,510,352|87|
|Using RegExp.text with cached regex pattern|11,324,532|89|
|Using new RegExp.test|2,721,431|89|
|Using new RegExp.test with cached regex pattern|3,101,971|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":613176405.9709163,"samples":7},{"name":"Using indexof","opsSec":647677624.8117579,"samples":8},{"name":"Using RegExp.test","opsSec":10510351.724324968,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11324532.374668619,"samples":5},{"name":"Using new RegExp.test","opsSec":2721430.962476684,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3101970.670356353,"samples":4}]}-->
