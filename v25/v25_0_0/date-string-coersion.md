## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,057,288|528645|
|Using brackets {}|1,050,465|525514|
|Using '' + |978,293|489379|
|Using date.toString()|1,219,797|609899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":528645,"opsSec":1057288.6508996813},{"name":"Using brackets {}","samples":525514,"opsSec":1050465.7340140059},{"name":"Using '' + ","samples":489379,"opsSec":978293.9501779089},{"name":"Using date.toString()","samples":609899,"opsSec":1219797.2510444878}]}-->
