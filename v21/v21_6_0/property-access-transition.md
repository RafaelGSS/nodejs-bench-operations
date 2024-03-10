## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,182,863|96|
|Adding property in the object creation - small object|5,195,820|95|
|Adding property after the function creation - small class|273,508|88|
|Adding property in the function creation - small class|278,409|91|
|Adding property after the class creation - small class|279,243|89|
|Adding property in the class creation - small class|276,642|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5182862.676573199,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5195820.437339371,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":273507.831695917,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":278408.7994117107,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":279242.7757530398,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":276641.8869444038,"samples":3}]}-->
