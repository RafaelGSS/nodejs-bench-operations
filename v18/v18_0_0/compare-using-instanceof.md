## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,615|151308|
|[True conditional] Using constructor name|312,309|156155|
|[True conditional] Check if property is valid then instanceof |318,812|159407|
|[False conditional] Using instanceof only|14,610,168|7305085|
|[False conditional] Using constructor name|20,742,533|10371267|
|[False conditional] Check if property is valid then instanceof |20,692,694|10346348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":302615.248288699,"samples":151308},{"name":"[True conditional] Using constructor name","opsSec":312309.8494623069,"samples":156155},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318812.64440766675,"samples":159407},{"name":"[False conditional] Using instanceof only","opsSec":14610168.948481636,"samples":7305085},{"name":"[False conditional] Using constructor name","opsSec":20742533.87053083,"samples":10371267},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":20692694.349543914,"samples":10346348}]}-->
