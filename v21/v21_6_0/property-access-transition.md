## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,143,410|96|
|Adding property in the object creation - small object|5,137,635|96|
|Adding property after the function creation - small class|264,966|88|
|Adding property in the function creation - small class|269,002|90|
|Adding property after the class creation - small class|270,255|87|
|Adding property in the class creation - small class|270,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5143410.065012102,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5137635.206526525,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":264966.3148418472,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":269001.5831652251,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":270255.358845122,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":270515.6286423038,"samples":4}]}-->
