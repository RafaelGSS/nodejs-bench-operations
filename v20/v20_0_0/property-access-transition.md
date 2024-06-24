## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,756,869|1878435|
|Adding property in the object creation - small object|3,765,065|1882533|
|Adding property after the function creation - small class|261,133|130567|
|Adding property in the function creation - small class|257,120|128561|
|Adding property after the class creation - small class|220,558|110280|
|Adding property in the class creation - small class|223,913|111957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:26:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3756869.090262193,"samples":1878435},{"name":"Adding property in the object creation - small object","opsSec":3765065.7191791856,"samples":1882533},{"name":"Adding property after the function creation - small class","opsSec":261133.2150612615,"samples":130567},{"name":"Adding property in the function creation - small class","opsSec":257120.9263300269,"samples":128561},{"name":"Adding property after the class creation - small class","opsSec":220558.74853920727,"samples":110280},{"name":"Adding property in the class creation - small class","opsSec":223913.37755423257,"samples":111957}]}-->
