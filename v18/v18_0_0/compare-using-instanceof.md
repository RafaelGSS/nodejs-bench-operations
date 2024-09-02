## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|266,928|133465|
|[True conditional] Using constructor name|271,176|135589|
|[True conditional] Check if property is valid then instanceof |281,056|140529|
|[False conditional] Using instanceof only|12,631,090|6315546|
|[False conditional] Using constructor name|18,515,699|9257850|
|[False conditional] Check if property is valid then instanceof |17,272,496|8636249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:43:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":266928.04286433687,"samples":133465},{"name":"[True conditional] Using constructor name","opsSec":271176.1706583937,"samples":135589},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":281056.6987136742,"samples":140529},{"name":"[False conditional] Using instanceof only","opsSec":12631090.689909179,"samples":6315546},{"name":"[False conditional] Using constructor name","opsSec":18515699.78269861,"samples":9257850},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17272496.87477372,"samples":8636249}]}-->
