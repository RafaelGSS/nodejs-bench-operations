## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,501,125|95|
|Using dot notation|817,784,327|97|
|Using define property (writable)|4,416,419|92|
|Using define property initialized (writable)|6,265,623|95|
|Using define property (getter)|2,483,912|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822501125.4191921,"samples":8},{"name":"Using dot notation","opsSec":817784326.7236955,"samples":6},{"name":"Using define property (writable)","opsSec":4416418.552217441,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6265623.350427806,"samples":5},{"name":"Using define property (getter)","opsSec":2483911.7509763613,"samples":4}]}-->
