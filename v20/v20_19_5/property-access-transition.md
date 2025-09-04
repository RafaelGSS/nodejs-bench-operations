## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,517,472|3758738|
|Adding property in the object creation - small object|7,350,104|3675054|
|Adding property after the function creation - small class|231,341|116774|
|Adding property in the function creation - small class|239,066|120076|
|Adding property after the class creation - small class|233,482|116760|
|Adding property in the class creation - small class|228,564|115790|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3758738,"opsSec":7517472.5720325075},{"name":"Adding property in the object creation - small object","samples":3675054,"opsSec":7350104.35434824},{"name":"Adding property after the function creation - small class","samples":116774,"opsSec":231341.61680704475},{"name":"Adding property in the function creation - small class","samples":120076,"opsSec":239066.74217986994},{"name":"Adding property after the class creation - small class","samples":116760,"opsSec":233482.06383426822},{"name":"Adding property in the class creation - small class","samples":115790,"opsSec":228564.0254578516}]}-->
