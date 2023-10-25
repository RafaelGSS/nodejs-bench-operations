## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,792,586|97|
|Adding property in the object creation - small object|5,823,614|94|
|Adding property after the function creation - small class|190,577|81|
|Adding property in the function creation - small class|197,572|81|
|Adding property after the class creation - small class|159,297|76|
|Adding property in the class creation - small class|159,355|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5792586.359565447,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5823613.924233706,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":190577.2552585519,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":197572.45513073466,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":159296.8133493271,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":159354.89159198056,"samples":3}]}-->
