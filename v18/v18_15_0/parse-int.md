## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,505,283|86|
|Using parseInt(x, 10) - big number (10 len)|10,429,124|85|
|Using + - small number (2 len)|650,971,294|87|
|Using + - big number (10 len)|680,358,130|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:19 GMT+0000 (Coordinated Universal Time)
</details>

