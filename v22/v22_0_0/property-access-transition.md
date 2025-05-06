## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,988,782|3994392|
|Adding property in the object creation - small object|7,904,197|3952101|
|Adding property after the function creation - small class|269,563|135987|
|Adding property in the function creation - small class|283,576|141847|
|Adding property after the class creation - small class|267,436|133724|
|Adding property in the class creation - small class|266,506|133706|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3994392,"opsSec":7988782.370288396},{"name":"Adding property in the object creation - small object","samples":3952101,"opsSec":7904197.747541611},{"name":"Adding property after the function creation - small class","samples":135987,"opsSec":269563.49743246555},{"name":"Adding property in the function creation - small class","samples":141847,"opsSec":283576.68262493797},{"name":"Adding property after the class creation - small class","samples":133724,"opsSec":267436.63340820686},{"name":"Adding property in the class creation - small class","samples":133706,"opsSec":266506.04468182946}]}-->
