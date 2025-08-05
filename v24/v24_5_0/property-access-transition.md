## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,599,844|3799923|
|Adding property in the object creation - small object|7,782,058|3891033|
|Adding property after the function creation - small class|285,774|142896|
|Adding property in the function creation - small class|299,528|149932|
|Adding property after the class creation - small class|286,963|143485|
|Adding property in the class creation - small class|271,686|135844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:33:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3799923,"opsSec":7599844.66242734},{"name":"Adding property in the object creation - small object","samples":3891033,"opsSec":7782058.80937766},{"name":"Adding property after the function creation - small class","samples":142896,"opsSec":285774.78892756207},{"name":"Adding property in the function creation - small class","samples":149932,"opsSec":299528.92537798954},{"name":"Adding property after the class creation - small class","samples":143485,"opsSec":286963.25980695366},{"name":"Adding property in the class creation - small class","samples":135844,"opsSec":271686.3356495078}]}-->
