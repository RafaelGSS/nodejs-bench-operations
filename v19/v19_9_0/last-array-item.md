## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|698,117,139|96|
|Length = 10_000 - Array.at|710,344,605|97|
|Length = 1_000_000 - Array.at|710,589,672|99|
|Length = 100 - Array[length - 1]|713,664,413|96|
|Length = 10_000 - Array[length - 1]|712,220,502|97|
|Length = 1_000_000 - Array[length - 1]|712,686,276|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:21 GMT+0000 (Coordinated Universal Time)
</details>

