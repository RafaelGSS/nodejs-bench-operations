## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,497,604|96|
|Using dot notation|823,122,487|96|
|Using define property (writable)|4,288,677|92|
|Using define property initialized (writable)|6,288,244|94|
|Using define property (getter)|2,430,513|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822497604.3513371,"samples":5},{"name":"Using dot notation","opsSec":823122487.2002578,"samples":9},{"name":"Using define property (writable)","opsSec":4288677.202090691,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6288243.748767417,"samples":5},{"name":"Using define property (getter)","opsSec":2430512.5132306577,"samples":4}]}-->
