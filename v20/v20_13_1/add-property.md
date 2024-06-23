## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,003,072|10001537|
|Using dot notation|18,531,625|9265813|
|Using define property (writable)|3,493,732|1746867|
|Using define property initialized (writable)|4,186,154|2093078|
|Using define property (getter)|2,148,437|1074219|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:38:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20003072.99983302,"samples":10001537},{"name":"Using dot notation","opsSec":18531625.962887384,"samples":9265813},{"name":"Using define property (writable)","opsSec":3493732.3928849827,"samples":1746867},{"name":"Using define property initialized (writable)","opsSec":4186154.8362570596,"samples":2093078},{"name":"Using define property (getter)","opsSec":2148437.0117225717,"samples":1074219}]}-->
