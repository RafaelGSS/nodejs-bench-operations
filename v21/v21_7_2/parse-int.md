## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,320,789|7660396|
|Using parseInt(x, 10) - big number (10 len)|15,388,163|7694082|
|Using + - small number (2 len)|15,340,846|7670424|
|Using + - big number (10 len)|15,358,939|7679470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:22:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15320789.395459669,"samples":7660396},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15388163.507572945,"samples":7694082},{"name":"Using + - small number (2 len)","opsSec":15340846.09768393,"samples":7670424},{"name":"Using + - big number (10 len)","opsSec":15358939.754239336,"samples":7679470}]}-->
