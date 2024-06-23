## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,091,475|8045738|
|Using dot notation|16,195,882|8097942|
|Using define property (writable)|3,341,708|1670855|
|Using define property initialized (writable)|4,022,149|2011075|
|Using define property (getter)|2,040,142|1020102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16091475.872417415,"samples":8045738},{"name":"Using dot notation","opsSec":16195882.510573635,"samples":8097942},{"name":"Using define property (writable)","opsSec":3341708.1888498114,"samples":1670855},{"name":"Using define property initialized (writable)","opsSec":4022149.3403320494,"samples":2011075},{"name":"Using define property (getter)","opsSec":2040142.1020623841,"samples":1020102}]}-->
