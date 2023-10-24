## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,578,154|97|
|Adding property in the object creation - small object|2,598,626|97|
|Adding property after the function creation - small class|148,519|87|
|Adding property in the function creation - small class|148,875|85|
|Adding property after the class creation - small class|121,296|84|
|Adding property in the class creation - small class|118,131|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2578153.9626951087,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2598626.2315333253,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":148519.06813458647,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148874.51788168974,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":121296.13463772561,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":118131.39361370928,"samples":4}]}-->
