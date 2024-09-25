## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,724,833|2362417|
|Adding property in the object creation - small object|4,728,419|2364210|
|Adding property after the function creation - small class|244,626|122314|
|Adding property in the function creation - small class|250,151|125076|
|Adding property after the class creation - small class|243,986|122626|
|Adding property in the class creation - small class|240,995|120498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:52:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4724833.896064121,"samples":2362417},{"name":"Adding property in the object creation - small object","opsSec":4728419.148882408,"samples":2364210},{"name":"Adding property after the function creation - small class","opsSec":244626.90407144942,"samples":122314},{"name":"Adding property in the function creation - small class","opsSec":250151.50570057207,"samples":125076},{"name":"Adding property after the class creation - small class","opsSec":243986.34911619322,"samples":122626},{"name":"Adding property in the class creation - small class","opsSec":240995.94794491108,"samples":120498}]}-->
