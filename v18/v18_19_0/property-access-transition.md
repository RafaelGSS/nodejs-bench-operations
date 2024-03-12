## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,457,481|98|
|Adding property in the object creation - small object|3,447,075|98|
|Adding property after the function creation - small class|199,265|88|
|Adding property in the function creation - small class|199,496|89|
|Adding property after the class creation - small class|168,889|85|
|Adding property in the class creation - small class|168,343|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3457481.294785729,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":3447074.8974745753,"samples":8},{"name":"Adding property after the function creation - small class","opsSec":199264.51091928783,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":199495.71518882303,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":168888.69635546592,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":168343.31998361513,"samples":3}]}-->
