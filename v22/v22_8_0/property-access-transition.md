## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,943,167|3982580|
|Adding property in the object creation - small object|7,691,465|3845733|
|Adding property after the function creation - small class|248,435|125903|
|Adding property in the function creation - small class|264,819|132898|
|Adding property after the class creation - small class|256,010|130181|
|Adding property in the class creation - small class|260,452|131399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7943167.196960072,"samples":3982580},{"name":"Adding property in the object creation - small object","opsSec":7691465.215470548,"samples":3845733},{"name":"Adding property after the function creation - small class","opsSec":248435.80140508155,"samples":125903},{"name":"Adding property in the function creation - small class","opsSec":264819.633843785,"samples":132898},{"name":"Adding property after the class creation - small class","opsSec":256010.44052035734,"samples":130181},{"name":"Adding property in the class creation - small class","opsSec":260452.81410228013,"samples":131399}]}-->
