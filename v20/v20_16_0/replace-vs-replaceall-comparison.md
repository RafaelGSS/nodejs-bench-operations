## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,666,730|1333366|
|Using replaceAll()|2,330,657|1165329|
|Using replaceAll(//g)|2,421,393|1210697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:41:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2666730.8319733483,"samples":1333366},{"name":"Using replaceAll()","opsSec":2330657.5012385366,"samples":1165329},{"name":"Using replaceAll(//g)","opsSec":2421393.6174206347,"samples":1210697}]}-->
