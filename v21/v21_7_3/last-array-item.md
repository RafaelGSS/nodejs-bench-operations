## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|964,826,270|96|
|Length = 10_000 - Array.at|966,874,352|96|
|Length = 1_000_000 - Array.at|967,291,989|98|
|Length = 100 - Array[length - 1]|909,852,337|96|
|Length = 10_000 - Array[length - 1]|910,511,896|97|
|Length = 1_000_000 - Array[length - 1]|910,115,323|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":964826270.2622097,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":966874352.2000805,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":967291989.3666257,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":909852336.9924241,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910511895.5040598,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":910115322.8304778,"samples":6}]}-->
