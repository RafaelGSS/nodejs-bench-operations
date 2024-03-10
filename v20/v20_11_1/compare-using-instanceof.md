## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,208|55|
|[True conditional] Using constructor name|190,668|92|
|[True conditional] Check if property is valid then instanceof |194,148|93|
|[False conditional] Using instanceof only|845,864,883|97|
|[False conditional] Using constructor name|846,022,624|95|
|[False conditional] Check if property is valid then instanceof |846,349,677|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":237208.41353941304,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":190667.91652097728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":194147.82501762707,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":845864883.1897147,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":846022623.8702893,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846349676.7456006,"samples":6}]}-->
