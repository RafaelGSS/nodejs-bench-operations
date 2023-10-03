## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|596,848,100|95|
|Using parseInt(x, 10) - big number (10 len)|595,270,082|95|
|Using + - small number (2 len)|599,966,224|96|
|Using + - big number (10 len)|597,458,744|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:10 GMT+0000 (Coordinated Universal Time)
</details>

