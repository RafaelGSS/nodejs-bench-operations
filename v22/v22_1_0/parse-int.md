## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,035,270|8017636|
|Using parseInt(x, 10) - big number (10 len)|16,030,306|8015154|
|Using + - small number (2 len)|16,176,846|8088424|
|Using + - big number (10 len)|16,081,248|8040625|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:25:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16035270.075769747,"samples":8017636},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16030306.172526048,"samples":8015154},{"name":"Using + - small number (2 len)","opsSec":16176846.835206253,"samples":8088424},{"name":"Using + - big number (10 len)","opsSec":16081248.520525219,"samples":8040625}]}-->
