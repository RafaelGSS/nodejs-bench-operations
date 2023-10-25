## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|678,525,584|81|
|Using parseInt(x, 10) - big number (10 len)|694,901,262|88|
|Using + - small number (2 len)|631,507,092|81|
|Using + - big number (10 len)|685,590,816|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":678525583.6323838,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":694901262.3236777,"samples":6},{"name":"Using + - small number (2 len)","opsSec":631507091.6628474,"samples":10},{"name":"Using + - big number (10 len)","opsSec":685590815.764026,"samples":7}]}-->
