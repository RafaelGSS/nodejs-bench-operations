## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,772,571|4386286|
|Length = 10_000 - Array.at|9,552,927|4776464|
|Length = 1_000_000 - Array.at|9,410,658|4705331|
|Length = 100 - Array[length - 1]|17,613,110|8806556|
|Length = 10_000 - Array[length - 1]|17,872,262|8936132|
|Length = 1_000_000 - Array[length - 1]|18,107,195|9053598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:59:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8772571.029539961,"samples":4386286},{"name":"Length = 10_000 - Array.at","opsSec":9552927.971209768,"samples":4776464},{"name":"Length = 1_000_000 - Array.at","opsSec":9410658.99407021,"samples":4705331},{"name":"Length = 100 - Array[length - 1]","opsSec":17613110.41447172,"samples":8806556},{"name":"Length = 10_000 - Array[length - 1]","opsSec":17872262.573270757,"samples":8936132},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":18107195.95251199,"samples":9053598}]}-->
