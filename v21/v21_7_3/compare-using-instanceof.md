## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|330,557|165279|
|[True conditional] Using constructor name|326,182|163092|
|[True conditional] Check if property is valid then instanceof |334,792|167397|
|[False conditional] Using instanceof only|15,366,493|7683247|
|[False conditional] Using constructor name|15,315,702|7657852|
|[False conditional] Check if property is valid then instanceof |15,338,555|7669278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:55:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":330557.3269852781,"samples":165279},{"name":"[True conditional] Using constructor name","opsSec":326182.05008368543,"samples":163092},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334792.7753280481,"samples":167397},{"name":"[False conditional] Using instanceof only","opsSec":15366493.723380392,"samples":7683247},{"name":"[False conditional] Using constructor name","opsSec":15315702.713506222,"samples":7657852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15338555.907929517,"samples":7669278}]}-->
