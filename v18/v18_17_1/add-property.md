## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|697,188,673|95|
|Using dot notation|710,727,639|95|
|Using define property (writable)|2,942,769|97|
|Using define property initialized (writable)|3,798,182|98|
|Using define property (getter)|1,507,887|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":697188673.2670029,"samples":6},{"name":"Using dot notation","opsSec":710727639.4230081,"samples":7},{"name":"Using define property (writable)","opsSec":2942769.345099475,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3798182.0898761917,"samples":6},{"name":"Using define property (getter)","opsSec":1507887.4485864257,"samples":4}]}-->
