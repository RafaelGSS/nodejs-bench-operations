## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,697,886|91|
|Adding property in the object creation - small object|1,721,346|89|
|Adding property after the function creation - small class|129,219|82|
|Adding property in the function creation - small class|132,641|79|
|Adding property after the class creation - small class|108,986|80|
|Adding property in the class creation - small class|111,343|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1697885.7120378222,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":1721346.467060924,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":129219.37450525236,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":132640.6565161478,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":108986.10535906992,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":111342.78697658518,"samples":3}]}-->
