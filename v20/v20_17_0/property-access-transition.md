## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,497,923|3753895|
|Adding property in the object creation - small object|7,276,462|3638430|
|Adding property after the function creation - small class|235,094|118005|
|Adding property in the function creation - small class|246,744|123828|
|Adding property after the class creation - small class|239,478|121024|
|Adding property in the class creation - small class|240,504|122008|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7497923.931773615,"samples":3753895},{"name":"Adding property in the object creation - small object","opsSec":7276462.297676657,"samples":3638430},{"name":"Adding property after the function creation - small class","opsSec":235094.63271691784,"samples":118005},{"name":"Adding property in the function creation - small class","opsSec":246744.8915270975,"samples":123828},{"name":"Adding property after the class creation - small class","opsSec":239478.77116189135,"samples":121024},{"name":"Adding property in the class creation - small class","opsSec":240504.17677012837,"samples":122008}]}-->
