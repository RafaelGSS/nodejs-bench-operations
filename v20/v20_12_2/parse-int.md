## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|936,422,770|95|
|Using parseInt(x, 10) - big number (10 len)|938,642,112|98|
|Using + - small number (2 len)|938,578,544|99|
|Using + - big number (10 len)|938,123,983|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:06:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":936422769.6546896,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":938642112.383855,"samples":6},{"name":"Using + - small number (2 len)","opsSec":938578543.5018545,"samples":6},{"name":"Using + - big number (10 len)","opsSec":938123983.1311561,"samples":6}]}-->
