## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|151,097,028|88|
|Using parseInt(x, 10) - big number (10 len)|11,756,339|85|
|Using + - small number (2 len)|729,797,702|87|
|Using + - big number (10 len)|744,579,592|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:17 GMT+0000 (Coordinated Universal Time)
</details>

