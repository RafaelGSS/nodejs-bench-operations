## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,006,560|8003281|
|Using dot notation|16,150,344|8075173|
|Using define property (writable)|3,762,957|1881479|
|Using define property initialized (writable)|4,721,782|2360892|
|Using define property (getter)|2,348,086|1174044|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:23:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16006560.815523764,"samples":8003281},{"name":"Using dot notation","opsSec":16150344.417245675,"samples":8075173},{"name":"Using define property (writable)","opsSec":3762957.360297018,"samples":1881479},{"name":"Using define property initialized (writable)","opsSec":4721782.734562074,"samples":2360892},{"name":"Using define property (getter)","opsSec":2348086.520706204,"samples":1174044}]}-->
