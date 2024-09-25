## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|936,080|468041|
|Using brackets {}|960,957|480479|
|Using '' + |948,957|474479|
|Using date.toString()|1,033,520|516761|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:47:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":936080.719442026,"samples":468041},{"name":"Using brackets {}","opsSec":960957.0544180676,"samples":480479},{"name":"Using '' + ","opsSec":948957.8709410421,"samples":474479},{"name":"Using date.toString()","opsSec":1033520.10245619,"samples":516761}]}-->
