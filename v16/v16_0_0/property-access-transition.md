## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,166,109|94|
|Adding property in the object creation - small object|2,198,270|94|
|Adding property after the function creation - small class|208,378|87|
|Adding property in the function creation - small class|210,254|90|
|Adding property after the class creation - small class|181,243|86|
|Adding property in the class creation - small class|181,138|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2166108.982583995,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2198269.974985217,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":208377.8271378479,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":210253.86272911658,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":181243.0404829212,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":181137.62892828917,"samples":3}]}-->
