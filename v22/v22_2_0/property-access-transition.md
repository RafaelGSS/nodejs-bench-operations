## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,843,189|1921595|
|Adding property in the object creation - small object|3,958,683|1979342|
|Adding property after the function creation - small class|284,379|142190|
|Adding property in the function creation - small class|287,641|143821|
|Adding property after the class creation - small class|308,441|154221|
|Adding property in the class creation - small class|328,429|164215|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3843189.1468121684,"samples":1921595},{"name":"Adding property in the object creation - small object","opsSec":3958683.144922607,"samples":1979342},{"name":"Adding property after the function creation - small class","opsSec":284379.1627877399,"samples":142190},{"name":"Adding property in the function creation - small class","opsSec":287641.3781194413,"samples":143821},{"name":"Adding property after the class creation - small class","opsSec":308441.0913322996,"samples":154221},{"name":"Adding property in the class creation - small class","opsSec":328429.70769749704,"samples":164215}]}-->
