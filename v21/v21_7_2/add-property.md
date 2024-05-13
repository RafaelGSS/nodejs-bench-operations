## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,099,625|7549813|
|Using dot notation|15,103,744|7551873|
|Using define property (writable)|3,521,863|1760932|
|Using define property initialized (writable)|4,403,450|2201726|
|Using define property (getter)|2,326,675|1163338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:30:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15099625.728196258,"samples":7549813},{"name":"Using dot notation","opsSec":15103744.942746425,"samples":7551873},{"name":"Using define property (writable)","opsSec":3521863.3097058325,"samples":1760932},{"name":"Using define property initialized (writable)","opsSec":4403450.361917497,"samples":2201726},{"name":"Using define property (getter)","opsSec":2326675.4369405867,"samples":1163338}]}-->
