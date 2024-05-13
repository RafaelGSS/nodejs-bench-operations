## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,110,472|10055237|
|Using dot notation|20,097,786|10048894|
|Using define property (writable)|3,638,934|1819468|
|Using define property initialized (writable)|4,440,172|2220087|
|Using define property (getter)|2,251,893|1125947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:29:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20110472.75313418,"samples":10055237},{"name":"Using dot notation","opsSec":20097786.914686237,"samples":10048894},{"name":"Using define property (writable)","opsSec":3638934.7627641843,"samples":1819468},{"name":"Using define property initialized (writable)","opsSec":4440172.312742899,"samples":2220087},{"name":"Using define property (getter)","opsSec":2251893.8783949693,"samples":1125947}]}-->
