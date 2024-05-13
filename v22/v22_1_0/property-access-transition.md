## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,842,734|1921368|
|Adding property in the object creation - small object|3,853,257|1926629|
|Adding property after the function creation - small class|300,370|150186|
|Adding property in the function creation - small class|319,965|160019|
|Adding property after the class creation - small class|309,114|154558|
|Adding property in the class creation - small class|326,931|163466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3842734.1478020446,"samples":1921368},{"name":"Adding property in the object creation - small object","opsSec":3853257.113750655,"samples":1926629},{"name":"Adding property after the function creation - small class","opsSec":300370.85919146595,"samples":150186},{"name":"Adding property in the function creation - small class","opsSec":319965.07995830255,"samples":160019},{"name":"Adding property after the class creation - small class","opsSec":309114.9137702656,"samples":154558},{"name":"Adding property in the class creation - small class","opsSec":326931.42917770153,"samples":163466}]}-->
