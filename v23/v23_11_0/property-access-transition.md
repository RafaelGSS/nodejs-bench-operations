## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,857,732|3928869|
|Adding property in the object creation - small object|7,510,187|3755096|
|Adding property after the function creation - small class|276,304|138347|
|Adding property in the function creation - small class|285,301|142654|
|Adding property after the class creation - small class|271,733|137665|
|Adding property in the class creation - small class|272,587|140159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3928869,"opsSec":7857732.641026339},{"name":"Adding property in the object creation - small object","samples":3755096,"opsSec":7510187.899437406},{"name":"Adding property after the function creation - small class","samples":138347,"opsSec":276304.99517078896},{"name":"Adding property in the function creation - small class","samples":142654,"opsSec":285301.64347938326},{"name":"Adding property after the class creation - small class","samples":137665,"opsSec":271733.2951712527},{"name":"Adding property in the class creation - small class","samples":140159,"opsSec":272587.683167185}]}-->
