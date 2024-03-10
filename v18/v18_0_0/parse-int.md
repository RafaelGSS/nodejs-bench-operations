## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|240,448,461|95|
|Using parseInt(x, 10) - big number (10 len)|18,448,903|98|
|Using + - small number (2 len)|822,986,406|95|
|Using + - big number (10 len)|822,247,714|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":240448461.42325005,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18448902.84157926,"samples":7},{"name":"Using + - small number (2 len)","opsSec":822986405.8594005,"samples":7},{"name":"Using + - big number (10 len)","opsSec":822247714.1938593,"samples":9}]}-->
