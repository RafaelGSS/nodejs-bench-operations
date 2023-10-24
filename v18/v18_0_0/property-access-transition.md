## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,165,988|92|
|Adding property in the object creation - small object|2,200,992|91|
|Adding property after the function creation - small class|152,164|82|
|Adding property in the function creation - small class|151,932|79|
|Adding property after the class creation - small class|124,872|76|
|Adding property in the class creation - small class|122,326|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2165987.551654135,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2200992.499062429,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":152164.463497077,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":151932.1376936089,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":124871.68946868523,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":122326.23295872043,"samples":4}]}-->
