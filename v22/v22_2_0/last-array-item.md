## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,958,265|7979133|
|Length = 10_000 - Array.at|15,725,201|7862601|
|Length = 1_000_000 - Array.at|15,874,911|7937456|
|Length = 100 - Array[length - 1]|15,881,081|7940542|
|Length = 10_000 - Array[length - 1]|15,959,631|7979816|
|Length = 1_000_000 - Array[length - 1]|15,973,384|7986693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15958265.202091668,"samples":7979133},{"name":"Length = 10_000 - Array.at","opsSec":15725201.087917546,"samples":7862601},{"name":"Length = 1_000_000 - Array.at","opsSec":15874911.333209433,"samples":7937456},{"name":"Length = 100 - Array[length - 1]","opsSec":15881081.935414104,"samples":7940542},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15959631.680721328,"samples":7979816},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15973384.945957068,"samples":7986693}]}-->
