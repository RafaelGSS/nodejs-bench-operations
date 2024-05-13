## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,850,319|6925160|
|Using Object.getOwnPropertyNames()|13,893,481|6946741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:34:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13850319.778402789,"samples":6925160},{"name":"Using Object.getOwnPropertyNames()","opsSec":13893481.499837225,"samples":6946741}]}-->
