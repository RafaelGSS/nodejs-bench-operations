## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,751,203|97|
|Adding property in the object creation - small object|5,794,313|94|
|Adding property after the function creation - small class|291,079|86|
|Adding property in the function creation - small class|297,271|92|
|Adding property after the class creation - small class|299,203|89|
|Adding property in the class creation - small class|298,150|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:33:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5751203.152891517,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5794312.681044055,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":291079.1665192276,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":297271.4384899222,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":299203.375858679,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":298150.2466809156,"samples":4}]}-->
