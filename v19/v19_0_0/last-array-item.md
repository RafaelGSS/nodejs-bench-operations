## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,005,729|97|
|Length = 10_000 - Array.at|597,447,827|96|
|Length = 1_000_000 - Array.at|600,456,575|99|
|Length = 100 - Array[length - 1]|596,561,137|99|
|Length = 10_000 - Array[length - 1]|594,246,200|98|
|Length = 1_000_000 - Array[length - 1]|593,235,361|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:19 GMT+0000 (Coordinated Universal Time)
</details>

