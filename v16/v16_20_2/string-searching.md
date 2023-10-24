## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,183,508|96|
|Using indexof|714,143,147|96|
|Using RegExp.test|11,951,296|95|
|Using RegExp.text with cached regex pattern|12,748,163|97|
|Using new RegExp.test|3,295,979|94|
|Using new RegExp.test with cached regex pattern|3,882,005|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":13183508.484727124,"samples":4},{"name":"Using indexof","opsSec":714143147.1238744,"samples":7},{"name":"Using RegExp.test","opsSec":11951296.378159434,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":12748163.36707818,"samples":9},{"name":"Using new RegExp.test","opsSec":3295978.614131308,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3882004.556019753,"samples":5}]}-->
