## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,874,685|96|
|Length = 10_000 - Array.at|15,557,937|92|
|Length = 1_000_000 - Array.at|15,865,790|97|
|Length = 100 - Array[length - 1]|713,758,580|98|
|Length = 10_000 - Array[length - 1]|711,880,309|96|
|Length = 1_000_000 - Array[length - 1]|712,193,566|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:17 GMT+0000 (Coordinated Universal Time)
</details>

