## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|591,327,328|95|
|Using parseInt(x, 10) - big number (10 len)|595,154,524|95|
|Using + - small number (2 len)|589,811,277|94|
|Using + - big number (10 len)|592,938,386|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":591327328.3466449,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":595154524.2060534,"samples":7},{"name":"Using + - small number (2 len)","opsSec":589811277.4749976,"samples":6},{"name":"Using + - big number (10 len)","opsSec":592938386.436935,"samples":7}]}-->
