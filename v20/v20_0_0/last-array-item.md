## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,004,157|8002079|
|Length = 10_000 - Array.at|15,908,343|7954172|
|Length = 1_000_000 - Array.at|16,078,944|8039473|
|Length = 100 - Array[length - 1]|16,116,127|8058064|
|Length = 10_000 - Array[length - 1]|16,116,245|8058123|
|Length = 1_000_000 - Array[length - 1]|16,123,630|8061816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:50:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16004157.48300402,"samples":8002079},{"name":"Length = 10_000 - Array.at","opsSec":15908343.709017694,"samples":7954172},{"name":"Length = 1_000_000 - Array.at","opsSec":16078944.732782323,"samples":8039473},{"name":"Length = 100 - Array[length - 1]","opsSec":16116127.878034318,"samples":8058064},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16116245.204410525,"samples":8058123},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16123630.806564434,"samples":8061816}]}-->
