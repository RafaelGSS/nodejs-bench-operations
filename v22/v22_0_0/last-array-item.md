## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,422,054|7711028|
|Length = 10_000 - Array.at|15,396,782|7698392|
|Length = 1_000_000 - Array.at|14,346,483|7173242|
|Length = 100 - Array[length - 1]|15,651,038|7825520|
|Length = 10_000 - Array[length - 1]|15,020,516|7510259|
|Length = 1_000_000 - Array[length - 1]|14,592,298|7296150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:52:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15422054.550317124,"samples":7711028},{"name":"Length = 10_000 - Array.at","opsSec":15396782.36790674,"samples":7698392},{"name":"Length = 1_000_000 - Array.at","opsSec":14346483.770399973,"samples":7173242},{"name":"Length = 100 - Array[length - 1]","opsSec":15651038.466134852,"samples":7825520},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15020516.828360932,"samples":7510259},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14592298.861783847,"samples":7296150}]}-->
