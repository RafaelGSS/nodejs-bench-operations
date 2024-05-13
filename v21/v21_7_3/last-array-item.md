## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,042,685|7521343|
|Length = 10_000 - Array.at|15,110,942|7555472|
|Length = 1_000_000 - Array.at|15,149,506|7574754|
|Length = 100 - Array[length - 1]|15,071,709|7535855|
|Length = 10_000 - Array[length - 1]|15,123,403|7561702|
|Length = 1_000_000 - Array[length - 1]|15,097,466|7548734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:03:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15042685.699184122,"samples":7521343},{"name":"Length = 10_000 - Array.at","opsSec":15110942.36803694,"samples":7555472},{"name":"Length = 1_000_000 - Array.at","opsSec":15149506.60621753,"samples":7574754},{"name":"Length = 100 - Array[length - 1]","opsSec":15071709.457427924,"samples":7535855},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15123403.455646861,"samples":7561702},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15097466.641204143,"samples":7548734}]}-->
