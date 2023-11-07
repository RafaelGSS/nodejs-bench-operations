## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,875,118|99|
|Adding property in the object creation - small object|3,894,727|97|
|Adding property after the function creation - small class|240,049|86|
|Adding property in the function creation - small class|243,898|92|
|Adding property after the class creation - small class|202,187|84|
|Adding property in the class creation - small class|200,143|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3875117.8238039287,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3894727.235984899,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":240048.78316272912,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":243897.58577182755,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":202187.2805493683,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":200142.7960015803,"samples":4}]}-->
