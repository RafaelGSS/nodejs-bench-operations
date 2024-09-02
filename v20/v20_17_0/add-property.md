## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,898,575|8949288|
|Using dot notation|16,941,992|8470997|
|Using define property (writable)|3,320,543|1660272|
|Using define property initialized (writable)|4,123,583|2061792|
|Using define property (getter)|1,838,887|919444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17898575.248280033,"samples":8949288},{"name":"Using dot notation","opsSec":16941992.37344935,"samples":8470997},{"name":"Using define property (writable)","opsSec":3320543.9468424316,"samples":1660272},{"name":"Using define property initialized (writable)","opsSec":4123583.7031132737,"samples":2061792},{"name":"Using define property (getter)","opsSec":1838887.5586644416,"samples":919444}]}-->
