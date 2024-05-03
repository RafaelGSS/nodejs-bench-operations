## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|965,771,280|95|
|Length = 10_000 - Array.at|968,988,251|99|
|Length = 1_000_000 - Array.at|968,155,078|96|
|Length = 100 - Array[length - 1]|911,512,176|97|
|Length = 10_000 - Array[length - 1]|911,666,769|97|
|Length = 1_000_000 - Array[length - 1]|911,754,506|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":965771280.3754638,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":968988250.5395525,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":968155077.8000712,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":911512176.3025482,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":911666769.2039686,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":911754505.9749589,"samples":8}]}-->
