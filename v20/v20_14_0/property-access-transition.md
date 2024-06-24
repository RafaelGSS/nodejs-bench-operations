## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,060,911|2030456|
|Adding property in the object creation - small object|4,052,325|2026163|
|Adding property after the function creation - small class|268,000|134001|
|Adding property in the function creation - small class|257,716|128859|
|Adding property after the class creation - small class|257,592|129148|
|Adding property in the class creation - small class|263,488|131745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4060911.520811917,"samples":2030456},{"name":"Adding property in the object creation - small object","opsSec":4052325.9513701773,"samples":2026163},{"name":"Adding property after the function creation - small class","opsSec":268000.4370215128,"samples":134001},{"name":"Adding property in the function creation - small class","opsSec":257716.1207339948,"samples":128859},{"name":"Adding property after the class creation - small class","opsSec":257592.3247427965,"samples":129148},{"name":"Adding property in the class creation - small class","opsSec":263488.42802808085,"samples":131745}]}-->
