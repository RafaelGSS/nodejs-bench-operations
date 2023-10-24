## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,554,276|96|
|Adding property in the object creation - small object|5,647,092|89|
|Adding property after the function creation - small class|183,589|85|
|Adding property in the function creation - small class|187,717|88|
|Adding property after the class creation - small class|159,005|86|
|Adding property in the class creation - small class|159,394|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5554275.725965127,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5647092.199692439,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":183589.08644331578,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":187717.1287844442,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":159005.13531773523,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":159394.13615227715,"samples":4}]}-->
