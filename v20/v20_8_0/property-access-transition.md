## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,417,795|96|
|Adding property in the object creation - small object|8,546,162|97|
|Adding property after the function creation - small class|257,741|87|
|Adding property in the function creation - small class|262,963|90|
|Adding property after the class creation - small class|221,161|88|
|Adding property in the class creation - small class|219,880|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:43:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8417795.269482851,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":8546162.282069046,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":257741.02313129025,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":262962.98914391774,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":221161.12108547095,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":219880.45738832612,"samples":4}]}-->
