## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|215,976,297|90|
|Using parseInt(x, 10) - big number (10 len)|15,236,949|95|
|Using + - small number (2 len)|595,612,747|99|
|Using + - big number (10 len)|594,957,443|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":215976297.1850133,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15236948.71961461,"samples":7},{"name":"Using + - small number (2 len)","opsSec":595612747.1817197,"samples":6},{"name":"Using + - big number (10 len)","opsSec":594957443.2804207,"samples":7}]}-->
