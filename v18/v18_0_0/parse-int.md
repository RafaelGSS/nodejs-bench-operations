## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|221,080,796|91|
|Using parseInt(x, 10) - big number (10 len)|14,853,606|98|
|Using + - small number (2 len)|594,215,120|98|
|Using + - big number (10 len)|593,413,734|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:12 GMT+0000 (Coordinated Universal Time)
</details>

