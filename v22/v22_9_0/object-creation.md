## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,496,321|20250246|
|Object.create({})|2,003,827|1002078|
|Cached Empty.prototype|107,582,651|53845083|
|Empty.prototype|2,509,402|1263649|
|Empty class|1,535,717|767860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:29:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":40496321.20288667,"samples":20250246},{"name":"Object.create({})","opsSec":2003827.3041919842,"samples":1002078},{"name":"Cached Empty.prototype","opsSec":107582651.12594427,"samples":53845083},{"name":"Empty.prototype","opsSec":2509402.7164831655,"samples":1263649},{"name":"Empty class","opsSec":1535717.294066128,"samples":767860}]}-->
