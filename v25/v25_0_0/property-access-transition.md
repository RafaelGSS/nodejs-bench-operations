## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,334,696|3667424|
|Adding property in the object creation - small object|7,660,255|3831316|
|Adding property after the function creation - small class|299,502|149764|
|Adding property in the function creation - small class|290,541|150644|
|Adding property after the class creation - small class|308,172|154088|
|Adding property in the class creation - small class|301,924|154520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3667424,"opsSec":7334696.861236476},{"name":"Adding property in the object creation - small object","samples":3831316,"opsSec":7660255.221971258},{"name":"Adding property after the function creation - small class","samples":149764,"opsSec":299502.75251696835},{"name":"Adding property in the function creation - small class","samples":150644,"opsSec":290541.74469183636},{"name":"Adding property after the class creation - small class","samples":154088,"opsSec":308172.99099891586},{"name":"Adding property in the class creation - small class","samples":154520,"opsSec":301924.9997041713}]}-->
