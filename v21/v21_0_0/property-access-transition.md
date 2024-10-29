## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,777,846|3893230|
|Adding property in the object creation - small object|7,356,522|3678263|
|Adding property after the function creation - small class|230,304|115154|
|Adding property in the function creation - small class|245,889|123669|
|Adding property after the class creation - small class|242,719|121856|
|Adding property in the class creation - small class|238,981|119491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7777846.781362931,"samples":3893230},{"name":"Adding property in the object creation - small object","opsSec":7356522.777843023,"samples":3678263},{"name":"Adding property after the function creation - small class","opsSec":230304.3925119957,"samples":115154},{"name":"Adding property in the function creation - small class","opsSec":245889.38644805207,"samples":123669},{"name":"Adding property after the class creation - small class","opsSec":242719.2568800659,"samples":121856},{"name":"Adding property in the class creation - small class","opsSec":238981.74667934852,"samples":119491}]}-->
