## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|705,237,239|97|
|Length = 10_000 - Array[length - 1]|705,713,457|96|
|Length = 1_000_000 - Array[length - 1]|706,165,041|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:02 GMT+0000 (Coordinated Universal Time)
</details>

