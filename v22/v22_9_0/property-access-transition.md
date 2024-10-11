## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,077,968|4039040|
|Adding property in the object creation - small object|7,528,168|3797190|
|Adding property after the function creation - small class|249,619|125148|
|Adding property in the function creation - small class|271,863|135932|
|Adding property after the class creation - small class|258,211|129530|
|Adding property in the class creation - small class|259,234|132556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:26:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8077968.394788657,"samples":4039040},{"name":"Adding property in the object creation - small object","opsSec":7528168.926195527,"samples":3797190},{"name":"Adding property after the function creation - small class","opsSec":249619.1242955101,"samples":125148},{"name":"Adding property in the function creation - small class","opsSec":271863.07240319694,"samples":135932},{"name":"Adding property after the class creation - small class","opsSec":258211.04752089563,"samples":129530},{"name":"Adding property in the class creation - small class","opsSec":259234.2172019496,"samples":132556}]}-->
