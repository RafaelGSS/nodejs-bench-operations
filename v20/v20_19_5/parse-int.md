## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,671,553|50339367|
|Using parseInt(x, 10) - big number (10 len)|101,338,821|50670540|
|Using + - small number (2 len)|97,698,289|48852125|
|Using + - big number (10 len)|103,049,279|51524654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50339367,"opsSec":100671553.29944625},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50670540,"opsSec":101338821.1576764},{"name":"Using + - small number (2 len)","samples":48852125,"opsSec":97698289.42736204},{"name":"Using + - big number (10 len)","samples":51524654,"opsSec":103049279.97059584}]}-->
