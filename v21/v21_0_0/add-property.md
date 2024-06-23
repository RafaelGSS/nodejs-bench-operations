## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,565,765|8282883|
|Using dot notation|16,581,643|8290822|
|Using define property (writable)|3,478,612|1739307|
|Using define property initialized (writable)|4,238,077|2119039|
|Using define property (getter)|2,115,704|1057853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16565765.702395393,"samples":8282883},{"name":"Using dot notation","opsSec":16581643.567478336,"samples":8290822},{"name":"Using define property (writable)","opsSec":3478612.671154577,"samples":1739307},{"name":"Using define property initialized (writable)","opsSec":4238077.804704039,"samples":2119039},{"name":"Using define property (getter)","opsSec":2115704.616324556,"samples":1057853}]}-->
