## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,930,359|96|
|Using dot notation|845,054,018|98|
|Using define property (writable)|4,228,204|96|
|Using define property initialized (writable)|6,233,276|93|
|Using define property (getter)|2,359,825|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":844930358.5202413,"samples":6},{"name":"Using dot notation","opsSec":845054018.2433643,"samples":8},{"name":"Using define property (writable)","opsSec":4228203.931429936,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6233276.381456986,"samples":5},{"name":"Using define property (getter)","opsSec":2359825.3392644483,"samples":4}]}-->
