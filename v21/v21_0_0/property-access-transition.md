## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,210,204|98|
|Adding property in the object creation - small object|5,184,127|95|
|Adding property after the function creation - small class|271,562|89|
|Adding property in the function creation - small class|273,988|92|
|Adding property after the class creation - small class|277,101|88|
|Adding property in the class creation - small class|277,118|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5210203.816703333,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5184127.036976368,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":271561.56869022193,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":273988.3755766129,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":277100.56004455115,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":277117.5932067762,"samples":3}]}-->
