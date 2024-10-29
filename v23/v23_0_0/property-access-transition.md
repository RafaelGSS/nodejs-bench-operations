## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,926,835|3963449|
|Adding property in the object creation - small object|7,844,856|3924088|
|Adding property after the function creation - small class|269,550|135960|
|Adding property in the function creation - small class|289,233|144973|
|Adding property after the class creation - small class|278,058|141019|
|Adding property in the class creation - small class|274,817|137438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7926835.282879242,"samples":3963449},{"name":"Adding property in the object creation - small object","opsSec":7844856.1196490135,"samples":3924088},{"name":"Adding property after the function creation - small class","opsSec":269550.0277436686,"samples":135960},{"name":"Adding property in the function creation - small class","opsSec":289233.5096922953,"samples":144973},{"name":"Adding property after the class creation - small class","opsSec":278058.1700949216,"samples":141019},{"name":"Adding property in the class creation - small class","opsSec":274817.61994336016,"samples":137438}]}-->
