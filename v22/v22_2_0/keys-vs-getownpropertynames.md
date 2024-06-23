## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,152,779|7076390|
|Using Object.getOwnPropertyNames()|13,911,291|6955646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14152779.801858045,"samples":7076390},{"name":"Using Object.getOwnPropertyNames()","opsSec":13911291.304448484,"samples":6955646}]}-->
