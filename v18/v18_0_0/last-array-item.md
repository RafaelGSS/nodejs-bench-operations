## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,088,186|99|
|Length = 10_000 - Array.at|26,292,926|97|
|Length = 1_000_000 - Array.at|26,301,927|100|
|Length = 100 - Array[length - 1]|845,718,958|92|
|Length = 10_000 - Array[length - 1]|845,356,867|100|
|Length = 1_000_000 - Array[length - 1]|845,917,738|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:35:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26088186.36408932,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26292925.574929684,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26301926.731045373,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":845718958.1017936,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845356866.7499095,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845917737.5339876,"samples":7}]}-->
