## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|846,005,647|91|
|Using parseInt(x, 10) - big number (10 len)|846,045,313|95|
|Using + - small number (2 len)|851,349,713|96|
|Using + - big number (10 len)|850,386,420|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:12:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":846005646.8952788,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846045312.8373644,"samples":6},{"name":"Using + - small number (2 len)","opsSec":851349713.2579122,"samples":6},{"name":"Using + - big number (10 len)","opsSec":850386419.8073206,"samples":7}]}-->
