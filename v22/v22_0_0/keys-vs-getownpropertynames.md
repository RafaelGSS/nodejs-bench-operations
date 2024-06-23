## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,814,502|6907252|
|Using Object.getOwnPropertyNames()|14,063,295|7031648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:45:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13814502.839588862,"samples":6907252},{"name":"Using Object.getOwnPropertyNames()","opsSec":14063295.606223062,"samples":7031648}]}-->
