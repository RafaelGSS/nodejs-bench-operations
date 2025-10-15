## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,631,323|3815747|
|Adding property in the object creation - small object|7,625,880|3812945|
|Adding property after the function creation - small class|283,730|144016|
|Adding property in the function creation - small class|294,829|147682|
|Adding property after the class creation - small class|287,663|143833|
|Adding property in the class creation - small class|273,180|142173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3815747,"opsSec":7631323.684118018},{"name":"Adding property in the object creation - small object","samples":3812945,"opsSec":7625880.1626145905},{"name":"Adding property after the function creation - small class","samples":144016,"opsSec":283730.4796622591},{"name":"Adding property in the function creation - small class","samples":147682,"opsSec":294829.059795275},{"name":"Adding property after the class creation - small class","samples":143833,"opsSec":287663.9610378441},{"name":"Adding property in the class creation - small class","samples":142173,"opsSec":273180.1508873738}]}-->
