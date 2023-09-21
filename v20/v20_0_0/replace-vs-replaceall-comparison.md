## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>

