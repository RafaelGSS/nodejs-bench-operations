## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,013,594|91|
|Using parseInt(x, 10) - big number (10 len)|15,099,718|97|
|Using + - small number (2 len)|599,519,676|97|
|Using + - big number (10 len)|598,765,793|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:11 GMT+0000 (Coordinated Universal Time)
</details>

