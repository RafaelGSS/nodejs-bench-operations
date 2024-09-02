## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,761,457|2380729|
|Adding property in the object creation - small object|4,719,292|2359647|
|Adding property after the function creation - small class|246,865|123564|
|Adding property in the function creation - small class|240,567|120284|
|Adding property after the class creation - small class|209,797|104899|
|Adding property in the class creation - small class|198,627|99314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:10:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4761457.663300851,"samples":2380729},{"name":"Adding property in the object creation - small object","opsSec":4719292.533942534,"samples":2359647},{"name":"Adding property after the function creation - small class","opsSec":246865.51977130686,"samples":123564},{"name":"Adding property in the function creation - small class","opsSec":240567.8506919809,"samples":120284},{"name":"Adding property after the class creation - small class","opsSec":209797.10100608022,"samples":104899},{"name":"Adding property in the class creation - small class","opsSec":198627.0896666642,"samples":99314}]}-->
