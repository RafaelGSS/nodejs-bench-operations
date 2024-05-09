## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,777,646|8388824|
|Using Object.getOwnPropertyNames()|16,329,566|8164784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16777646.657752782,"samples":8388824},{"name":"Using Object.getOwnPropertyNames()","opsSec":16329566.75896914,"samples":8164784}]}-->
