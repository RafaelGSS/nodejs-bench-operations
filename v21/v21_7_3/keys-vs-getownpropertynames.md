## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,199,625|6599813|
|Using Object.getOwnPropertyNames()|13,215,145|6607573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:59:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13199625.181632288,"samples":6599813},{"name":"Using Object.getOwnPropertyNames()","opsSec":13215145.36566097,"samples":6607573}]}-->
