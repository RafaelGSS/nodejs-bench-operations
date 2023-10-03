## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,246,119|94|
|Length = 10_000 - Array.at|19,108,923|92|
|Length = 1_000_000 - Array.at|19,235,163|92|
|Length = 100 - Array[length - 1]|590,968,872|97|
|Length = 10_000 - Array[length - 1]|590,877,793|97|
|Length = 1_000_000 - Array[length - 1]|590,058,669|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:19 GMT+0000 (Coordinated Universal Time)
</details>

