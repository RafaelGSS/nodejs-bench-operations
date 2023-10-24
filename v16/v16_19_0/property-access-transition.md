## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,941,529|95|
|Adding property in the object creation - small object|1,958,560|99|
|Adding property after the function creation - small class|169,054|86|
|Adding property in the function creation - small class|168,251|84|
|Adding property after the class creation - small class|139,308|81|
|Adding property in the class creation - small class|138,515|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1941528.839068448,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":1958559.947321896,"samples":8},{"name":"Adding property after the function creation - small class","opsSec":169053.69551123312,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":168251.47468504365,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":139307.5288765831,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":138514.86787911446,"samples":4}]}-->
