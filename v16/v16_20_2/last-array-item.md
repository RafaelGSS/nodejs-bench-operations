## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,676,698|92|
|Length = 10_000 - Array.at|15,651,590|97|
|Length = 1_000_000 - Array.at|15,639,450|97|
|Length = 100 - Array[length - 1]|713,156,523|96|
|Length = 10_000 - Array[length - 1]|711,569,175|97|
|Length = 1_000_000 - Array[length - 1]|710,732,242|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:00:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15676698.232108265,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":15651590.123857243,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":15639449.79593825,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":713156522.9213648,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":711569174.6711663,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":710732242.11955,"samples":6}]}-->
