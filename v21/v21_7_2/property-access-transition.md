## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,691,350|99|
|Adding property in the object creation - small object|5,705,121|94|
|Adding property after the function creation - small class|291,753|88|
|Adding property in the function creation - small class|296,120|91|
|Adding property after the class creation - small class|297,954|89|
|Adding property in the class creation - small class|296,482|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:34:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5691350.283463478,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5705121.122678225,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":291752.97877928294,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":296120.20634883083,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":297954.1875217565,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":296482.22375783033,"samples":4}]}-->
