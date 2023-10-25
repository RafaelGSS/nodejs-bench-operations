## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,631,490|97|
|Adding property in the object creation - small object|2,677,314|97|
|Adding property after the function creation - small class|183,316|83|
|Adding property in the function creation - small class|184,169|83|
|Adding property after the class creation - small class|152,963|78|
|Adding property in the class creation - small class|154,511|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2631490.0557040963,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2677313.6942605237,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":183316.33603767495,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":184168.86512512487,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":152962.54244482354,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":154510.84779311265,"samples":3}]}-->
