## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,120,057|98|
|Using dot notation|820,383,625|98|
|Using define property (writable)|4,236,163|92|
|Using define property initialized (writable)|6,196,162|92|
|Using define property (getter)|2,402,875|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Directly in the object","opsSec":820120057.1834788,"samples":6},{"name":"Using dot notation","opsSec":820383624.584437,"samples":6},{"name":"Using define property (writable)","opsSec":4236163.266394479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6196161.770511278,"samples":5},{"name":"Using define property (getter)","opsSec":2402874.9575527916,"samples":4}]}-->
