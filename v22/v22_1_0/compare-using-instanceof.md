## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|333,935|166968|
|[True conditional] Using constructor name|331,980|165991|
|[True conditional] Check if property is valid then instanceof |333,563|166782|
|[False conditional] Using instanceof only|16,222,882|8111442|
|[False conditional] Using constructor name|16,185,956|8092979|
|[False conditional] Check if property is valid then instanceof |16,203,278|8101640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:01:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":333935.4363169539,"samples":166968},{"name":"[True conditional] Using constructor name","opsSec":331980.08447488095,"samples":165991},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":333563.46963409666,"samples":166782},{"name":"[False conditional] Using instanceof only","opsSec":16222882.89685712,"samples":8111442},{"name":"[False conditional] Using constructor name","opsSec":16185956.996449746,"samples":8092979},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16203278.217632603,"samples":8101640}]}-->
