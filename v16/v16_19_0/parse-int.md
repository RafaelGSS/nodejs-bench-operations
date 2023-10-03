## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,397,032|89|
|Using parseInt(x, 10) - big number (10 len)|14,717,950|96|
|Using + - small number (2 len)|595,529,093|99|
|Using + - big number (10 len)|595,293,110|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:12 GMT+0000 (Coordinated Universal Time)
</details>

