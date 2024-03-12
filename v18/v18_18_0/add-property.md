## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,387,717|98|
|Using dot notation|820,158,304|99|
|Using define property (writable)|4,417,336|93|
|Using define property initialized (writable)|5,961,391|92|
|Using define property (getter)|2,205,950|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":822387717.1274515,"samples":7},{"name":"Using dot notation","opsSec":820158303.6003718,"samples":8},{"name":"Using define property (writable)","opsSec":4417335.7697541695,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5961390.916623704,"samples":5},{"name":"Using define property (getter)","opsSec":2205949.7583959256,"samples":6}]}-->
