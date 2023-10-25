## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,129,743|86|
|Adding property in the object creation - small object|2,168,522|84|
|Adding property after the function creation - small class|150,579|79|
|Adding property in the function creation - small class|152,674|76|
|Adding property after the class creation - small class|124,901|75|
|Adding property in the class creation - small class|124,506|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2129742.959351642,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2168521.993939475,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":150578.7502576894,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":152674.1033036861,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":124900.57921797886,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":124506.0925723913,"samples":3}]}-->
