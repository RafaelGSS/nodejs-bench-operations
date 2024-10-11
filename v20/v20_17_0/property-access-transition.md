## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,571,620|3789093|
|Adding property in the object creation - small object|7,028,700|3515361|
|Adding property after the function creation - small class|235,161|117806|
|Adding property in the function creation - small class|246,741|123699|
|Adding property after the class creation - small class|239,689|121390|
|Adding property in the class creation - small class|243,354|123295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:40:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7571620.859558062,"samples":3789093},{"name":"Adding property in the object creation - small object","opsSec":7028700.3911361,"samples":3515361},{"name":"Adding property after the function creation - small class","opsSec":235161.32226201508,"samples":117806},{"name":"Adding property in the function creation - small class","opsSec":246741.2822857544,"samples":123699},{"name":"Adding property after the class creation - small class","opsSec":239689.57492950434,"samples":121390},{"name":"Adding property in the class creation - small class","opsSec":243354.0683881638,"samples":123295}]}-->
