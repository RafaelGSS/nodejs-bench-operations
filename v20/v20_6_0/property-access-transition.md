## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,734,330|97|
|Adding property in the object creation - small object|5,648,430|94|
|Adding property after the function creation - small class|176,732|84|
|Adding property in the function creation - small class|184,518|85|
|Adding property after the class creation - small class|158,762|84|
|Adding property in the class creation - small class|156,890|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5734330.113786355,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5648430.027525275,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":176732.17181246594,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":184517.7177116389,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":158761.92740075308,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":156889.54239822703,"samples":3}]}-->
