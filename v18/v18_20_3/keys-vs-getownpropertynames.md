## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,613,197|7306599|
|Using Object.getOwnPropertyNames()|13,926,279|6963140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14613197.873702904,"samples":7306599},{"name":"Using Object.getOwnPropertyNames()","opsSec":13926279.764130149,"samples":6963140}]}-->
