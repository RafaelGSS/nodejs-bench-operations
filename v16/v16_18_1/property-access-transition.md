## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,750,207|97|
|Adding property in the object creation - small object|3,775,539|100|
|Adding property after the function creation - small class|231,350|86|
|Adding property in the function creation - small class|232,352|91|
|Adding property after the class creation - small class|197,478|87|
|Adding property in the class creation - small class|197,532|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:36:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3750207.307452458,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":3775538.726166939,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":231349.7808116261,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":232352.2348892068,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":197477.823954522,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":197531.54783111694,"samples":4}]}-->
