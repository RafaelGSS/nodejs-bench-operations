## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,762,785|1881394|
|Adding property in the object creation - small object|3,774,501|1888554|
|Adding property after the function creation - small class|193,249|96625|
|Adding property in the function creation - small class|195,703|97852|
|Adding property after the class creation - small class|161,107|80554|
|Adding property in the class creation - small class|163,989|84194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:13:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1881394,"opsSec":3762785.3359479825},{"name":"Adding property in the object creation - small object","samples":1888554,"opsSec":3774501.5632395237},{"name":"Adding property after the function creation - small class","samples":96625,"opsSec":193249.2011078026},{"name":"Adding property in the function creation - small class","samples":97852,"opsSec":195703.11503051384},{"name":"Adding property after the class creation - small class","samples":80554,"opsSec":161107.04882398373},{"name":"Adding property in the class creation - small class","samples":84194,"opsSec":163989.55992217164}]}-->
