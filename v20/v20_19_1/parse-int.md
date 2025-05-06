## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,206,464|50127341|
|Using parseInt(x, 10) - big number (10 len)|99,697,320|49906266|
|Using + - small number (2 len)|100,183,586|50375627|
|Using + - big number (10 len)|96,403,082|48361708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50127341,"opsSec":100206464.05238849},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49906266,"opsSec":99697320.38080546},{"name":"Using + - small number (2 len)","samples":50375627,"opsSec":100183586.15020318},{"name":"Using + - big number (10 len)","samples":48361708,"opsSec":96403082.43909875}]}-->
