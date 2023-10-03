## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,659,378|86|
|Length = 10_000 - Array.at|14,607,556|83|
|Length = 1_000_000 - Array.at|14,438,821|90|
|Length = 100 - Array[length - 1]|699,898,166|86|
|Length = 10_000 - Array[length - 1]|672,206,851|82|
|Length = 1_000_000 - Array[length - 1]|697,900,612|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:28 GMT+0000 (Coordinated Universal Time)
</details>

