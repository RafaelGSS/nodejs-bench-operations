## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,970,323|1985162|
|Adding property in the object creation - small object|4,054,408|2027205|
|Adding property after the function creation - small class|275,167|137585|
|Adding property in the function creation - small class|265,748|132875|
|Adding property after the class creation - small class|268,473|134237|
|Adding property in the class creation - small class|268,565|134283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:41:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3970323.5394427907,"samples":1985162},{"name":"Adding property in the object creation - small object","opsSec":4054408.402562589,"samples":2027205},{"name":"Adding property after the function creation - small class","opsSec":275167.7738926323,"samples":137585},{"name":"Adding property in the function creation - small class","opsSec":265748.4448402112,"samples":132875},{"name":"Adding property after the class creation - small class","opsSec":268473.5699053341,"samples":134237},{"name":"Adding property in the class creation - small class","opsSec":268565.8485288473,"samples":134283}]}-->
