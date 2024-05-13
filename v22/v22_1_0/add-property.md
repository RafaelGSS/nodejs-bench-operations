## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,059,696|8029849|
|Using dot notation|16,082,992|8041497|
|Using define property (writable)|3,791,732|1895867|
|Using define property initialized (writable)|4,554,916|2277459|
|Using define property (getter)|2,298,625|1149313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:31:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16059696.77947027,"samples":8029849},{"name":"Using dot notation","opsSec":16082992.842021372,"samples":8041497},{"name":"Using define property (writable)","opsSec":3791732.058636322,"samples":1895867},{"name":"Using define property initialized (writable)","opsSec":4554916.651752318,"samples":2277459},{"name":"Using define property (getter)","opsSec":2298625.1035364247,"samples":1149313}]}-->
