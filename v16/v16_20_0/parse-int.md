## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|216,793,135|90|
|Using parseInt(x, 10) - big number (10 len)|15,300,395|95|
|Using + - small number (2 len)|594,511,101|98|
|Using + - big number (10 len)|594,677,594|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:08 GMT+0000 (Coordinated Universal Time)
</details>

