## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,803,531|1901766|
|Adding property in the object creation - small object|3,819,339|1909688|
|Adding property after the function creation - small class|191,685|95843|
|Adding property in the function creation - small class|191,918|95965|
|Adding property after the class creation - small class|161,064|81255|
|Adding property in the class creation - small class|164,176|82660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1901766,"opsSec":3803531.2012584475},{"name":"Adding property in the object creation - small object","samples":1909688,"opsSec":3819339.1968474993},{"name":"Adding property after the function creation - small class","samples":95843,"opsSec":191685.46634766168},{"name":"Adding property in the function creation - small class","samples":95965,"opsSec":191918.78541769288},{"name":"Adding property after the class creation - small class","samples":81255,"opsSec":161064.11679331472},{"name":"Adding property in the class creation - small class","samples":82660,"opsSec":164176.19267444676}]}-->
