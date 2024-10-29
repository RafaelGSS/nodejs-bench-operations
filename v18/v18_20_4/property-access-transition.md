## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,699,971|1849987|
|Adding property in the object creation - small object|3,684,897|1842637|
|Adding property after the function creation - small class|183,760|92549|
|Adding property in the function creation - small class|186,232|93249|
|Adding property after the class creation - small class|161,824|80913|
|Adding property in the class creation - small class|158,094|79990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3699971.032623232,"samples":1849987},{"name":"Adding property in the object creation - small object","opsSec":3684897.8603660055,"samples":1842637},{"name":"Adding property after the function creation - small class","opsSec":183760.9326675552,"samples":92549},{"name":"Adding property in the function creation - small class","opsSec":186232.07586669258,"samples":93249},{"name":"Adding property after the class creation - small class","opsSec":161824.54519733868,"samples":80913},{"name":"Adding property in the class creation - small class","opsSec":158094.7763894853,"samples":79990}]}-->
