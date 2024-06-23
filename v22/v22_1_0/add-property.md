## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,124,825|8062413|
|Using dot notation|16,166,815|8083408|
|Using define property (writable)|3,764,598|1882300|
|Using define property initialized (writable)|4,453,119|2226560|
|Using define property (getter)|2,279,041|1139521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:41:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16124825.322757857,"samples":8062413},{"name":"Using dot notation","opsSec":16166815.547314456,"samples":8083408},{"name":"Using define property (writable)","opsSec":3764598.509217102,"samples":1882300},{"name":"Using define property initialized (writable)","opsSec":4453119.162813039,"samples":2226560},{"name":"Using define property (getter)","opsSec":2279041.585216853,"samples":1139521}]}-->
