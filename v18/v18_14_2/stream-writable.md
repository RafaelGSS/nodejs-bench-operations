## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>

