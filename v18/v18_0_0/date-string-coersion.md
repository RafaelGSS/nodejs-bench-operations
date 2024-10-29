## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|994,406|497204|
|Using brackets {}|1,000,840|500421|
|Using '' + |1,002,668|501335|
|Using date.toString()|1,118,117|559060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":994406.0847738808,"samples":497204},{"name":"Using brackets {}","opsSec":1000840.2585379501,"samples":500421},{"name":"Using '' + ","opsSec":1002668.9672509638,"samples":501335},{"name":"Using date.toString()","opsSec":1118117.8509774904,"samples":559060}]}-->
