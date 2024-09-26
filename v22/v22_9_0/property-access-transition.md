## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,956,836|3978702|
|Adding property in the object creation - small object|7,757,021|3884754|
|Adding property after the function creation - small class|256,592|128859|
|Adding property in the function creation - small class|274,330|137166|
|Adding property after the class creation - small class|265,121|132572|
|Adding property in the class creation - small class|267,196|133602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:32:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7956836.836670282,"samples":3978702},{"name":"Adding property in the object creation - small object","opsSec":7757021.92517219,"samples":3884754},{"name":"Adding property after the function creation - small class","opsSec":256592.433683145,"samples":128859},{"name":"Adding property in the function creation - small class","opsSec":274330.60585186107,"samples":137166},{"name":"Adding property after the class creation - small class","opsSec":265121.3368978793,"samples":132572},{"name":"Adding property in the class creation - small class","opsSec":267196.4276532403,"samples":133602}]}-->
