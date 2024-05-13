## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,045,305|8022654|
|Using dot notation|16,151,029|8075515|
|Using define property (writable)|3,466,152|1733077|
|Using define property initialized (writable)|3,998,645|1999323|
|Using define property (getter)|2,029,996|1014999|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:26:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16045305.865371544,"samples":8022654},{"name":"Using dot notation","opsSec":16151029.460901232,"samples":8075515},{"name":"Using define property (writable)","opsSec":3466152.7372681177,"samples":1733077},{"name":"Using define property initialized (writable)","opsSec":3998645.6262862473,"samples":1999323},{"name":"Using define property (getter)","opsSec":2029996.6796782156,"samples":1014999}]}-->
