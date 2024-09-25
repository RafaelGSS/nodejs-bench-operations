## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,870,019|2435068|
|Adding property in the object creation - small object|4,854,172|2427087|
|Adding property after the function creation - small class|236,800|118401|
|Adding property in the function creation - small class|229,780|114891|
|Adding property after the class creation - small class|241,106|120554|
|Adding property in the class creation - small class|226,479|113240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:52:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4870019.523975287,"samples":2435068},{"name":"Adding property in the object creation - small object","opsSec":4854172.254085045,"samples":2427087},{"name":"Adding property after the function creation - small class","opsSec":236800.63790045024,"samples":118401},{"name":"Adding property in the function creation - small class","opsSec":229780.79097939417,"samples":114891},{"name":"Adding property after the class creation - small class","opsSec":241106.86105708077,"samples":120554},{"name":"Adding property in the class creation - small class","opsSec":226479.0794183349,"samples":113240}]}-->
