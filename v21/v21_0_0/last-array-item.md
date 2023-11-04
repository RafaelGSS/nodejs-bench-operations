## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,316,914|91|
|Length = 10_000 - Array.at|593,397,580|97|
|Length = 1_000_000 - Array.at|596,020,635|96|
|Length = 100 - Array[length - 1]|590,351,584|99|
|Length = 10_000 - Array[length - 1]|590,759,911|100|
|Length = 1_000_000 - Array[length - 1]|590,086,311|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594316914.3661816,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":593397580.4513993,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":596020634.5631065,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":590351583.6599178,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":590759910.9382839,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":590086310.9318001,"samples":7}]}-->
