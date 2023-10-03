## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,578,486|97|
|Length = 10_000 - Array.at|19,014,029|96|
|Length = 1_000_000 - Array.at|18,793,410|97|
|Length = 100 - Array[length - 1]|594,859,981|98|
|Length = 10_000 - Array[length - 1]|592,970,424|98|
|Length = 1_000_000 - Array[length - 1]|593,743,721|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>

