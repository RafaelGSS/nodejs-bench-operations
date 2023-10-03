## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,260,822|85|
|Using parseInt(x, 10) - big number (10 len)|6,623,119|86|
|Using + - small number (2 len)|686,888,430|85|
|Using + - big number (10 len)|669,651,468|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:21 GMT+0000 (Coordinated Universal Time)
</details>

