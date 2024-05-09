## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,002,587|10001294|
|Using parseInt(x, 10) - big number (10 len)|20,128,565|10064283|
|Using + - small number (2 len)|20,048,516|10024259|
|Using + - big number (10 len)|20,072,042|10036022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:21:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20002587.279908344,"samples":10001294},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20128565.718195334,"samples":10064283},{"name":"Using + - small number (2 len)","opsSec":20048516.275868006,"samples":10024259},{"name":"Using + - big number (10 len)","opsSec":20072042.835878223,"samples":10036022}]}-->
