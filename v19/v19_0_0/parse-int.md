## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|124,694,282|88|
|Using parseInt(x, 10) - big number (10 len)|11,378,466|92|
|Using + - small number (2 len)|571,694,757|95|
|Using + - big number (10 len)|583,807,582|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:16 GMT+0000 (Coordinated Universal Time)
</details>

