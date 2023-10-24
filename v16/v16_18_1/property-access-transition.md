## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,792,429|92|
|Adding property in the object creation - small object|2,753,250|91|
|Adding property after the function creation - small class|185,482|82|
|Adding property in the function creation - small class|186,509|83|
|Adding property after the class creation - small class|152,136|81|
|Adding property in the class creation - small class|151,820|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2792428.649220019,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":2753250.3081335323,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":185481.75569302597,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":186508.907688296,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":152136.47579096892,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":151819.5428561406,"samples":3}]}-->
