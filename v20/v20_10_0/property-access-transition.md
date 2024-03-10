## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,205,961|97|
|Adding property in the object creation - small object|5,243,901|94|
|Adding property after the function creation - small class|257,513|89|
|Adding property in the function creation - small class|260,254|89|
|Adding property after the class creation - small class|260,816|85|
|Adding property in the class creation - small class|261,810|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5205960.696307038,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5243900.750704675,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":257512.86330088132,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260254.10472479142,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":260815.76699015102,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":261810.26544279384,"samples":3}]}-->
