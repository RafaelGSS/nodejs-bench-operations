## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,258,841|10129421|
|Using parseInt(x, 10) - big number (10 len)|9,884,807|4942404|
|Using + - small number (2 len)|19,810,314|9905158|
|Using + - big number (10 len)|20,804,107|10402054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:19:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20258841.420389898,"samples":10129421},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9884807.976432782,"samples":4942404},{"name":"Using + - small number (2 len)","opsSec":19810314.715303995,"samples":9905158},{"name":"Using + - big number (10 len)","opsSec":20804107.36510903,"samples":10402054}]}-->
