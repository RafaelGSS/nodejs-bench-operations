## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,697,006|3848613|
|Adding property in the object creation - small object|7,520,602|3763677|
|Adding property after the function creation - small class|253,247|126832|
|Adding property in the function creation - small class|276,381|138193|
|Adding property after the class creation - small class|265,444|132728|
|Adding property in the class creation - small class|265,047|132535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:26:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7697006.465981577,"samples":3848613},{"name":"Adding property in the object creation - small object","opsSec":7520602.99535037,"samples":3763677},{"name":"Adding property after the function creation - small class","opsSec":253247.5855016548,"samples":126832},{"name":"Adding property in the function creation - small class","opsSec":276381.461816397,"samples":138193},{"name":"Adding property after the class creation - small class","opsSec":265444.22807937313,"samples":132728},{"name":"Adding property in the class creation - small class","opsSec":265047.91037705337,"samples":132535}]}-->
