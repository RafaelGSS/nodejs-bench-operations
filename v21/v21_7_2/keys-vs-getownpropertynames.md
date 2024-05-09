## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,096,780|6548391|
|Using Object.getOwnPropertyNames()|13,253,811|6626906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:50:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13096780.821290739,"samples":6548391},{"name":"Using Object.getOwnPropertyNames()","opsSec":13253811.12527998,"samples":6626906}]}-->
