## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,668,972|3834570|
|Adding property in the object creation - small object|7,631,135|3815573|
|Adding property after the function creation - small class|246,200|124004|
|Adding property in the function creation - small class|254,276|127545|
|Adding property after the class creation - small class|213,897|107227|
|Adding property in the class creation - small class|212,260|106131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3834570,"opsSec":7668972.8470678255},{"name":"Adding property in the object creation - small object","samples":3815573,"opsSec":7631135.896376072},{"name":"Adding property after the function creation - small class","samples":124004,"opsSec":246200.76085295132},{"name":"Adding property in the function creation - small class","samples":127545,"opsSec":254276.83691504854},{"name":"Adding property after the class creation - small class","samples":107227,"opsSec":213897.28739113425},{"name":"Adding property in the class creation - small class","samples":106131,"opsSec":212260.95185541973}]}-->
