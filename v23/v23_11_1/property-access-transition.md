## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,827,549|3913779|
|Adding property in the object creation - small object|7,817,376|3908690|
|Adding property after the function creation - small class|279,115|139558|
|Adding property in the function creation - small class|290,782|145396|
|Adding property after the class creation - small class|272,931|138188|
|Adding property in the class creation - small class|274,033|140347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3913779,"opsSec":7827549.076594053},{"name":"Adding property in the object creation - small object","samples":3908690,"opsSec":7817376.435276345},{"name":"Adding property after the function creation - small class","samples":139558,"opsSec":279115.85709268117},{"name":"Adding property in the function creation - small class","samples":145396,"opsSec":290782.71356325963},{"name":"Adding property after the class creation - small class","samples":138188,"opsSec":272931.4608561836},{"name":"Adding property in the class creation - small class","samples":140347,"opsSec":274033.4241582366}]}-->
