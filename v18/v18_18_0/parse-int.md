## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|237,882,061|97|
|Using parseInt(x, 10) - big number (10 len)|18,325,079|93|
|Using + - small number (2 len)|822,602,158|93|
|Using + - big number (10 len)|822,671,654|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":237882060.85073444,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18325078.989446796,"samples":4},{"name":"Using + - small number (2 len)","opsSec":822602158.3488803,"samples":7},{"name":"Using + - big number (10 len)","opsSec":822671654.1965803,"samples":7}]}-->
