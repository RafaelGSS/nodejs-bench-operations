## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,051,810|88|
|Adding property in the object creation - small object|2,048,313|89|
|Adding property after the function creation - small class|137,857|79|
|Adding property in the function creation - small class|145,899|84|
|Adding property after the class creation - small class|114,833|78|
|Adding property in the class creation - small class|120,151|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2051809.9181268343,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2048312.6246504334,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":137856.83766816603,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":145899.26727186728,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":114833.40538944404,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":120151.27348922394,"samples":4}]}-->
