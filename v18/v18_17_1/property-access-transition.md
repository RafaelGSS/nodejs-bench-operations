## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,971,818|94|
|Adding property in the object creation - small object|1,968,366|95|
|Adding property after the function creation - small class|144,371|83|
|Adding property in the function creation - small class|144,808|85|
|Adding property after the class creation - small class|116,681|83|
|Adding property in the class creation - small class|116,703|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1971818.0000372601,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1968366.2304761787,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":144371.0890259159,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":144808.24494086122,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":116681.47146821507,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":116702.72757156339,"samples":4}]}-->
