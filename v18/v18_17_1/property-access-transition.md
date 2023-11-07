## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,835,770|99|
|Adding property in the object creation - small object|3,843,707|100|
|Adding property after the function creation - small class|195,100|86|
|Adding property in the function creation - small class|195,281|91|
|Adding property after the class creation - small class|162,925|85|
|Adding property in the class creation - small class|163,918|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:38:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3835769.65025451,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3843706.676579327,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":195099.71818512073,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":195281.47995835668,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":162924.7998336819,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":163917.57301310933,"samples":3}]}-->
