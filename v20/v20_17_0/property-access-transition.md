## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,695,835|3847991|
|Adding property in the object creation - small object|7,249,703|3628859|
|Adding property after the function creation - small class|234,946|117772|
|Adding property in the function creation - small class|245,485|123134|
|Adding property after the class creation - small class|239,154|121040|
|Adding property in the class creation - small class|237,279|120428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7695835.579032274,"samples":3847991},{"name":"Adding property in the object creation - small object","opsSec":7249703.250065361,"samples":3628859},{"name":"Adding property after the function creation - small class","opsSec":234946.03368086612,"samples":117772},{"name":"Adding property in the function creation - small class","opsSec":245485.68278928753,"samples":123134},{"name":"Adding property after the class creation - small class","opsSec":239154.40408584787,"samples":121040},{"name":"Adding property in the class creation - small class","opsSec":237279.9542835525,"samples":120428}]}-->
