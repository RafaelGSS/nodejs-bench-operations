## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,893,905|1446953|
|Adding property in the object creation - small object|2,930,953|1465477|
|Adding property after the function creation - small class|206,865|103587|
|Adding property in the function creation - small class|221,103|110552|
|Adding property after the class creation - small class|179,525|89763|
|Adding property in the class creation - small class|187,921|93961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:41:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2893905.5584250554,"samples":1446953},{"name":"Adding property in the object creation - small object","opsSec":2930953.7652052725,"samples":1465477},{"name":"Adding property after the function creation - small class","opsSec":206865.83279100741,"samples":103587},{"name":"Adding property in the function creation - small class","opsSec":221103.439532335,"samples":110552},{"name":"Adding property after the class creation - small class","opsSec":179525.1774285174,"samples":89763},{"name":"Adding property in the class creation - small class","opsSec":187921.45321240067,"samples":93961}]}-->
