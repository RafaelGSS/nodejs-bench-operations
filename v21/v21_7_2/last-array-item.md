## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,046,076|7523039|
|Length = 10_000 - Array.at|15,006,393|7503197|
|Length = 1_000_000 - Array.at|15,062,881|7531441|
|Length = 100 - Array[length - 1]|15,132,091|7566046|
|Length = 10_000 - Array[length - 1]|15,085,789|7542895|
|Length = 1_000_000 - Array[length - 1]|15,138,261|7569131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:59:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15046076.976866009,"samples":7523039},{"name":"Length = 10_000 - Array.at","opsSec":15006393.189702507,"samples":7503197},{"name":"Length = 1_000_000 - Array.at","opsSec":15062881.457745345,"samples":7531441},{"name":"Length = 100 - Array[length - 1]","opsSec":15132091.576239746,"samples":7566046},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15085789.366392024,"samples":7542895},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15138261.848576795,"samples":7569131}]}-->
