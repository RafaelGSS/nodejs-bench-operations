## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,797,878|6398940|
|Using Object.getOwnPropertyNames()|12,933,738|6466870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:50:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":12797878.336265294,"samples":6398940},{"name":"Using Object.getOwnPropertyNames()","opsSec":12933738.913585138,"samples":6466870}]}-->
