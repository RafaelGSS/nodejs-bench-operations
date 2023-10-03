## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|601,045,835|98|
|Length = 10_000 - Array.at|595,408,925|95|
|Length = 1_000_000 - Array.at|601,961,469|97|
|Length = 100 - Array[length - 1]|595,167,644|96|
|Length = 10_000 - Array[length - 1]|594,850,430|97|
|Length = 1_000_000 - Array[length - 1]|594,042,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:18 GMT+0000 (Coordinated Universal Time)
</details>

