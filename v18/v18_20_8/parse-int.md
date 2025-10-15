## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,356,036|46178028|
|Using parseInt(x, 10) - big number (10 len)|16,853,749|8436980|
|Using + - small number (2 len)|99,135,427|50006241|
|Using + - big number (10 len)|105,128,308|52564163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46178028,"opsSec":92356036.78994435},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8436980,"opsSec":16853749.017885253},{"name":"Using + - small number (2 len)","samples":50006241,"opsSec":99135427.10921851},{"name":"Using + - big number (10 len)","samples":52564163,"opsSec":105128308.54870078}]}-->
