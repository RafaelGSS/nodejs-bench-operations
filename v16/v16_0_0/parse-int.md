## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|107,782,760|89|
|Using parseInt(x, 10) - big number (10 len)|9,112,224|92|
|Using + - small number (2 len)|587,539,404|96|
|Using + - big number (10 len)|585,506,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:15 GMT+0000 (Coordinated Universal Time)
</details>

