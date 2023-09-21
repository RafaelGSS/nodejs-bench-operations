## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>

