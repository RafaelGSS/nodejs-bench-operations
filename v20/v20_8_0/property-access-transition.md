## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,748,158|95|
|Adding property in the object creation - small object|5,902,061|98|
|Adding property after the function creation - small class|195,338|82|
|Adding property in the function creation - small class|198,211|84|
|Adding property after the class creation - small class|157,460|76|
|Adding property in the class creation - small class|158,531|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5748157.862335436,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5902060.901798094,"samples":8},{"name":"Adding property after the function creation - small class","opsSec":195337.57306209125,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":198211.08848736162,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":157459.78306906097,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":158530.57433307575,"samples":3}]}-->
