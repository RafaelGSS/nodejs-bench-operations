## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,079,514|8039758|
|Using parseInt(x, 10) - big number (10 len)|15,957,796|7978899|
|Using + - small number (2 len)|16,079,287|8039645|
|Using + - big number (10 len)|15,984,073|7992038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16079514.48851138,"samples":8039758},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15957796.372264568,"samples":7978899},{"name":"Using + - small number (2 len)","opsSec":16079287.845326848,"samples":8039645},{"name":"Using + - big number (10 len)","opsSec":15984073.826120274,"samples":7992038}]}-->
