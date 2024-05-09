## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,011,616|2005809|
|Adding property in the object creation - small object|3,995,720|1997861|
|Adding property after the function creation - small class|265,149|132576|
|Adding property in the function creation - small class|272,031|136017|
|Adding property after the class creation - small class|264,461|132231|
|Adding property in the class creation - small class|265,627|132814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4011616.315120849,"samples":2005809},{"name":"Adding property in the object creation - small object","opsSec":3995720.002140671,"samples":1997861},{"name":"Adding property after the function creation - small class","opsSec":265149.6486529322,"samples":132576},{"name":"Adding property in the function creation - small class","opsSec":272031.3857783532,"samples":136017},{"name":"Adding property after the class creation - small class","opsSec":264461.4160692299,"samples":132231},{"name":"Adding property in the class creation - small class","opsSec":265627.9930935843,"samples":132814}]}-->
