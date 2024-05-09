## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,934,418|9967210|
|Using dot notation|19,968,250|9984126|
|Using define property (writable)|3,590,025|1795013|
|Using define property initialized (writable)|3,946,251|1973126|
|Using define property (getter)|2,185,765|1092883|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:24:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19934418.325500306,"samples":9967210},{"name":"Using dot notation","opsSec":19968250.16281365,"samples":9984126},{"name":"Using define property (writable)","opsSec":3590025.9856333607,"samples":1795013},{"name":"Using define property initialized (writable)","opsSec":3946251.384385279,"samples":1973126},{"name":"Using define property (getter)","opsSec":2185765.4710485926,"samples":1092883}]}-->
