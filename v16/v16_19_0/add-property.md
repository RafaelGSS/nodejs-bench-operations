## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|567,105,477|90|
|Using dot notation|574,794,284|88|
|Using define property (writable)|2,521,946|92|
|Using define property initialized (writable)|3,030,879|94|
|Using define property (getter)|1,270,073|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":567105477.2527639,"samples":6},{"name":"Using dot notation","opsSec":574794284.3752561,"samples":6},{"name":"Using define property (writable)","opsSec":2521945.825354883,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3030879.4508539056,"samples":5},{"name":"Using define property (getter)","opsSec":1270072.5123123126,"samples":4}]}-->
