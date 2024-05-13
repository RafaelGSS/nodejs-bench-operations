## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,795,741|1897871|
|Adding property in the object creation - small object|3,824,856|1912429|
|Adding property after the function creation - small class|298,871|149436|
|Adding property in the function creation - small class|319,395|159698|
|Adding property after the class creation - small class|319,139|159570|
|Adding property in the class creation - small class|322,384|161193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:43:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3795741.4913694356,"samples":1897871},{"name":"Adding property in the object creation - small object","opsSec":3824856.049328658,"samples":1912429},{"name":"Adding property after the function creation - small class","opsSec":298871.0818680092,"samples":149436},{"name":"Adding property in the function creation - small class","opsSec":319395.1734053036,"samples":159698},{"name":"Adding property after the class creation - small class","opsSec":319139.41406011087,"samples":159570},{"name":"Adding property in the class creation - small class","opsSec":322384.3706693498,"samples":161193}]}-->
