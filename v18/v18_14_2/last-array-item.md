## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,271,318|95|
|Length = 10_000 - Array.at|16,301,775|96|
|Length = 1_000_000 - Array.at|16,282,453|94|
|Length = 100 - Array[length - 1]|708,336,528|98|
|Length = 10_000 - Array[length - 1]|705,572,738|97|
|Length = 1_000_000 - Array[length - 1]|706,455,593|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:23 GMT+0000 (Coordinated Universal Time)
</details>

