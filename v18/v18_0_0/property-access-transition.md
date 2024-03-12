## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,569,655|97|
|Adding property in the object creation - small object|3,584,865|95|
|Adding property after the function creation - small class|235,312|90|
|Adding property in the function creation - small class|235,616|91|
|Adding property after the class creation - small class|199,391|81|
|Adding property in the class creation - small class|200,959|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3569655.3239753633,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":3584864.836758191,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":235312.3855065383,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":235615.63982749268,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":199391.05213817823,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":200958.59821169934,"samples":3}]}-->
