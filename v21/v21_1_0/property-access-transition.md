## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,354,667|94|
|Adding property in the object creation - small object|8,416,985|95|
|Adding property after the function creation - small class|270,697|90|
|Adding property in the function creation - small class|263,473|92|
|Adding property after the class creation - small class|268,293|90|
|Adding property in the class creation - small class|265,636|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8354666.7527443245,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8416984.942144243,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":270696.9720926825,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":263472.9753830237,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":268292.9104319401,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":265635.53293810494,"samples":3}]}-->
