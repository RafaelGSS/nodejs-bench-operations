## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|686,363,375|88|
|Using indexof|694,267,195|89|
|Using RegExp.test|9,167,164|90|
|Using RegExp.text with cached regex pattern|10,090,663|90|
|Using new RegExp.test|2,383,499|89|
|Using new RegExp.test with cached regex pattern|2,724,343|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:55:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":686363375.2923069,"samples":7},{"name":"Using indexof","opsSec":694267194.5790398,"samples":7},{"name":"Using RegExp.test","opsSec":9167163.805885775,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":10090663.469515659,"samples":5},{"name":"Using new RegExp.test","opsSec":2383499.322077955,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2724343.4021090562,"samples":5}]}-->
