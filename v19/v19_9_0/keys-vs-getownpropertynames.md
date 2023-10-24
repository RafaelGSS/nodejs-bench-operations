## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,403,001|84|
|Using Object.getOwnPropertyNames()|40,318,181|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using Object.keys()","opsSec":44403001.4276347,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":40318180.937042065,"samples":10}]}-->
