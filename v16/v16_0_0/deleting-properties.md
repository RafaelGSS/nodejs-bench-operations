## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,769,510|87|
|Using delete property (proto: null)|10,298,837|92|
|Using delete property (cached proto: null)|1,745,042|89|
|Using undefined assignment|571,939,082|92|
|Using undefined assignment (proto: null)|11,435,782|90|
|Using undefined property (cached proto: null)|579,535,601|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1769510.3151767957,"samples":5},{"name":"Using delete property (proto: null)","opsSec":10298837.02813179,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1745041.6688852273,"samples":5},{"name":"Using undefined assignment","opsSec":571939081.8263825,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11435781.661284108,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":579535601.132231,"samples":7}]}-->
