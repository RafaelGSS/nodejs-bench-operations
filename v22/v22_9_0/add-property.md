## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|103,322,372|51662020|
|Using dot notation|68,231,075|34507653|
|Using define property (writable)|4,686,026|2343237|
|Using define property initialized (writable)|6,729,092|3364873|
|Using define property (getter)|2,343,810|1176581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:04:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Directly in the object","opsSec":103322372.99683407,"samples":51662020},{"name":"Using dot notation","opsSec":68231075.21570168,"samples":34507653},{"name":"Using define property (writable)","opsSec":4686026.521955365,"samples":2343237},{"name":"Using define property initialized (writable)","opsSec":6729092.483996139,"samples":3364873},{"name":"Using define property (getter)","opsSec":2343810.715570851,"samples":1176581}]}-->
