## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,374,956|3687484|
|Adding property in the object creation - small object|7,420,187|3710095|
|Adding property after the function creation - small class|241,982|121684|
|Adding property in the function creation - small class|277,113|138560|
|Adding property after the class creation - small class|265,214|132610|
|Adding property in the class creation - small class|265,260|132631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7374956.952314485,"samples":3687484},{"name":"Adding property in the object creation - small object","opsSec":7420187.165488502,"samples":3710095},{"name":"Adding property after the function creation - small class","opsSec":241982.12337078058,"samples":121684},{"name":"Adding property in the function creation - small class","opsSec":277113.0389204623,"samples":138560},{"name":"Adding property after the class creation - small class","opsSec":265214.66335054405,"samples":132610},{"name":"Adding property in the class creation - small class","opsSec":265260.1882729141,"samples":132631}]}-->
