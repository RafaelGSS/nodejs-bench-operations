## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|160,966,151|92|
|Using parseInt(x, 10) - big number (10 len)|12,098,176|94|
|Using + - small number (2 len)|715,252,943|95|
|Using + - big number (10 len)|713,946,660|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:10 GMT+0000 (Coordinated Universal Time)
</details>

