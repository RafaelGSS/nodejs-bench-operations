## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,813,260|95|
|Adding property in the object creation - small object|5,903,147|97|
|Adding property after the function creation - small class|186,117|87|
|Adding property in the function creation - small class|189,763|89|
|Adding property after the class creation - small class|182,776|84|
|Adding property in the class creation - small class|182,144|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5813259.806687427,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5903146.959169575,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":186116.8714789931,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":189763.06833285256,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":182775.86766304023,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":182143.78095326366,"samples":4}]}-->
