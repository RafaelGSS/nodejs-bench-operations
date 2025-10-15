## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,134,695|567349|
|Using brackets {}|1,143,478|571753|
|Using '' + |1,142,003|571003|
|Using date.toString()|1,275,213|637607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":567349,"opsSec":1134695.8667717706},{"name":"Using brackets {}","samples":571753,"opsSec":1143478.9750179045},{"name":"Using '' + ","samples":571003,"opsSec":1142003.3711082397},{"name":"Using date.toString()","samples":637607,"opsSec":1275213.4771624745}]}-->
