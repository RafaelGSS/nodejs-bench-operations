## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,125,838|81|
|Adding property in the object creation - small object|2,162,923|90|
|Adding property after the function creation - small class|122,657|82|
|Adding property in the function creation - small class|121,573|82|
|Adding property after the class creation - small class|101,780|79|
|Adding property in the class creation - small class|102,221|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2125838.0234026993,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2162923.102766822,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":122657.20770159758,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":121572.84018101917,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":101780.12111581322,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":102221.20229318323,"samples":4}]}-->
