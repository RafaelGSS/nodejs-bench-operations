## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,686,720|3843415|
|Adding property in the object creation - small object|7,550,477|3775244|
|Adding property after the function creation - small class|237,389|118695|
|Adding property in the function creation - small class|244,618|122310|
|Adding property after the class creation - small class|239,253|120099|
|Adding property in the class creation - small class|232,694|116348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3843415,"opsSec":7686720.418113719},{"name":"Adding property in the object creation - small object","samples":3775244,"opsSec":7550477.972965253},{"name":"Adding property after the function creation - small class","samples":118695,"opsSec":237389.978160122},{"name":"Adding property in the function creation - small class","samples":122310,"opsSec":244618.71770868174},{"name":"Adding property after the class creation - small class","samples":120099,"opsSec":239253.8140119671},{"name":"Adding property in the class creation - small class","samples":116348,"opsSec":232694.9696266745}]}-->
