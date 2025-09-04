## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,524,863|3768929|
|Adding property in the object creation - small object|7,353,408|3682398|
|Adding property after the function creation - small class|274,465|139442|
|Adding property in the function creation - small class|289,780|144902|
|Adding property after the class creation - small class|274,128|137069|
|Adding property in the class creation - small class|266,815|141773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3768929,"opsSec":7524863.869423818},{"name":"Adding property in the object creation - small object","samples":3682398,"opsSec":7353408.041688527},{"name":"Adding property after the function creation - small class","samples":139442,"opsSec":274465.6897515757},{"name":"Adding property in the function creation - small class","samples":144902,"opsSec":289780.091983291},{"name":"Adding property after the class creation - small class","samples":137069,"opsSec":274128.9241395796},{"name":"Adding property in the class creation - small class","samples":141773,"opsSec":266815.5723386743}]}-->
