## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,406,272|1703138|
|Using replaceAll()|3,103,340|1553501|
|Using replaceAll(//g)|3,082,683|1541343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3406272.1849751524,"samples":1703138},{"name":"Using replaceAll()","opsSec":3103340.9390407586,"samples":1553501},{"name":"Using replaceAll(//g)","opsSec":3082683.4290420203,"samples":1541343}]}-->
