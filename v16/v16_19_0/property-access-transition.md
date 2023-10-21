## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,612,926|94|
|Adding property in the object creation - small object|1,609,835|92|
|Adding property after the function creation - small class|141,011|82|
|Adding property in the function creation - small class|148,106|80|
|Adding property after the class creation - small class|123,661|83|
|Adding property in the class creation - small class|119,196|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1612925.7953278543,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":1609834.6890610813,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":141010.84880315152,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148105.9570260775,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":123660.90727535883,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":119196.40920416162,"samples":4}]}-->
