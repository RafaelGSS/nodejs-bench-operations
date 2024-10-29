## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,378,274|54196583|
|Using dot notation|68,900,560|34456560|
|Using define property (writable)|4,265,259|2132631|
|Using define property initialized (writable)|5,611,183|2805686|
|Using define property (getter)|2,148,049|1075555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108378274.17485873,"samples":54196583},{"name":"Using dot notation","opsSec":68900560.80577633,"samples":34456560},{"name":"Using define property (writable)","opsSec":4265259.261703554,"samples":2132631},{"name":"Using define property initialized (writable)","opsSec":5611183.049022008,"samples":2805686},{"name":"Using define property (getter)","opsSec":2148049.7937496332,"samples":1075555}]}-->
