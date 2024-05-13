## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,945,634|8472818|
|Using dot notation|16,848,204|8424103|
|Using define property (writable)|3,327,114|1663558|
|Using define property initialized (writable)|4,067,158|2033580|
|Using define property (getter)|2,096,281|1048141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:24:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16945634.771793135,"samples":8472818},{"name":"Using dot notation","opsSec":16848204.369128473,"samples":8424103},{"name":"Using define property (writable)","opsSec":3327114.3357701595,"samples":1663558},{"name":"Using define property initialized (writable)","opsSec":4067158.3011099473,"samples":2033580},{"name":"Using define property (getter)","opsSec":2096281.2523105734,"samples":1048141}]}-->
