## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,452,403|3726205|
|Adding property in the object creation - small object|7,317,635|3658820|
|Adding property after the function creation - small class|234,322|118237|
|Adding property in the function creation - small class|243,098|122681|
|Adding property after the class creation - small class|239,387|121434|
|Adding property in the class creation - small class|240,724|121955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7452403.337551416,"samples":3726205},{"name":"Adding property in the object creation - small object","opsSec":7317635.155725528,"samples":3658820},{"name":"Adding property after the function creation - small class","opsSec":234322.6746200517,"samples":118237},{"name":"Adding property in the function creation - small class","opsSec":243098.18702900235,"samples":122681},{"name":"Adding property after the class creation - small class","opsSec":239387.46048999997,"samples":121434},{"name":"Adding property in the class creation - small class","opsSec":240724.4086834512,"samples":121955}]}-->
