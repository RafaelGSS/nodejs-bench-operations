## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,789,382|92|
|Using dot notation|817,784,209|99|
|Using define property (writable)|4,326,163|95|
|Using define property initialized (writable)|5,243,276|91|
|Using define property (getter)|2,345,056|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":820789382.4752284,"samples":6},{"name":"Using dot notation","opsSec":817784209.141806,"samples":7},{"name":"Using define property (writable)","opsSec":4326162.786449416,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5243276.437215611,"samples":4},{"name":"Using define property (getter)","opsSec":2345056.0017947108,"samples":6}]}-->
