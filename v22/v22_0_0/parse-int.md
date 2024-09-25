## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,160,271|7580136|
|Using parseInt(x, 10) - big number (10 len)|15,352,076|7676039|
|Using + - small number (2 len)|15,009,087|7504544|
|Using + - big number (10 len)|15,055,736|7527869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15160271.818115724,"samples":7580136},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15352076.894539282,"samples":7676039},{"name":"Using + - small number (2 len)","opsSec":15009087.009239173,"samples":7504544},{"name":"Using + - big number (10 len)","opsSec":15055736.945831534,"samples":7527869}]}-->
