## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,827,316|3913661|
|Adding property in the object creation - small object|7,843,191|3921598|
|Adding property after the function creation - small class|272,490|137380|
|Adding property in the function creation - small class|283,533|141767|
|Adding property after the class creation - small class|267,396|135411|
|Adding property in the class creation - small class|267,016|133509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3913661,"opsSec":7827316.865280136},{"name":"Adding property in the object creation - small object","samples":3921598,"opsSec":7843191.090162377},{"name":"Adding property after the function creation - small class","samples":137380,"opsSec":272490.39047900727},{"name":"Adding property in the function creation - small class","samples":141767,"opsSec":283533.6591925417},{"name":"Adding property after the class creation - small class","samples":135411,"opsSec":267396.5486017235},{"name":"Adding property in the class creation - small class","samples":133509,"opsSec":267016.76958672574}]}-->
