## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,712,878|6856440|
|Using Object.getOwnPropertyNames()|14,541,635|7270818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:49:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13712878.587617029,"samples":6856440},{"name":"Using Object.getOwnPropertyNames()","opsSec":14541635.916792093,"samples":7270818}]}-->
