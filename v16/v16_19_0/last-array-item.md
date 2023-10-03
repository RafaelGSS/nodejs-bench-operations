## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,153,808|93|
|Length = 10_000 - Array.at|13,101,925|94|
|Length = 1_000_000 - Array.at|13,035,592|94|
|Length = 100 - Array[length - 1]|583,670,266|97|
|Length = 10_000 - Array[length - 1]|587,551,397|95|
|Length = 1_000_000 - Array[length - 1]|587,107,795|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>

