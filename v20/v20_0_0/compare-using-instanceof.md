## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|273,707|136854|
|[True conditional] Using constructor name|264,051|132026|
|[True conditional] Check if property is valid then instanceof |274,967|137484|
|[False conditional] Using instanceof only|11,587,599|5793800|
|[False conditional] Using constructor name|10,420,215|5210108|
|[False conditional] Check if property is valid then instanceof |10,409,110|5204556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:20:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":273707.98909059836,"samples":136854},{"name":"[True conditional] Using constructor name","opsSec":264051.2384094424,"samples":132026},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":274967.6887567416,"samples":137484},{"name":"[False conditional] Using instanceof only","opsSec":11587599.60055257,"samples":5793800},{"name":"[False conditional] Using constructor name","opsSec":10420215.826336501,"samples":5210108},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":10409110.811457109,"samples":5204556}]}-->
