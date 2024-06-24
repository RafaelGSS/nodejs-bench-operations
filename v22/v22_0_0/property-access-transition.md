## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,822,643|1911322|
|Adding property in the object creation - small object|3,973,637|1986819|
|Adding property after the function creation - small class|298,624|149313|
|Adding property in the function creation - small class|317,525|158763|
|Adding property after the class creation - small class|313,037|156520|
|Adding property in the class creation - small class|320,645|160323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3822643.9388366523,"samples":1911322},{"name":"Adding property in the object creation - small object","opsSec":3973637.086062586,"samples":1986819},{"name":"Adding property after the function creation - small class","opsSec":298624.8819484603,"samples":149313},{"name":"Adding property in the function creation - small class","opsSec":317525.9460205917,"samples":158763},{"name":"Adding property after the class creation - small class","opsSec":313037.99405253836,"samples":156520},{"name":"Adding property in the class creation - small class","opsSec":320645.1874848677,"samples":160323}]}-->
