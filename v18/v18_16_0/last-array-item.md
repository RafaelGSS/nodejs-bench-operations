## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,867,319|92|
|Length = 10_000 - Array.at|19,737,447|92|
|Length = 1_000_000 - Array.at|20,066,926|91|
|Length = 100 - Array[length - 1]|937,411,635|89|
|Length = 10_000 - Array[length - 1]|925,307,242|92|
|Length = 1_000_000 - Array[length - 1]|860,739,365|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>

