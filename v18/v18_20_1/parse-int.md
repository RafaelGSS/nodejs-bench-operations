## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|266,348,605|98|
|Using parseInt(x, 10) - big number (10 len)|20,651,422|96|
|Using + - small number (2 len)|910,504,203|94|
|Using + - big number (10 len)|909,025,005|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:04:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":266348604.56327185,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20651422.305236213,"samples":6},{"name":"Using + - small number (2 len)","opsSec":910504202.8332527,"samples":6},{"name":"Using + - big number (10 len)","opsSec":909025005.0117035,"samples":7}]}-->
