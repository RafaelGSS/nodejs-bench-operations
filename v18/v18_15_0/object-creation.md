## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,065,712|94|
|Length = 10_000 - Array.at|15,947,232|94|
|Length = 1_000_000 - Array.at|16,085,897|97|
|Length = 100 - Array[length - 1]|708,504,635|96|
|Length = 10_000 - Array[length - 1]|706,995,891|94|
|Length = 1_000_000 - Array[length - 1]|706,145,230|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:54 GMT+0000 (Coordinated Universal Time)
</details>

