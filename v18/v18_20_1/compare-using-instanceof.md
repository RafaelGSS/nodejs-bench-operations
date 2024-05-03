## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|290,693|54|
|[True conditional] Using constructor name|228,188|94|
|[True conditional] Check if property is valid then instanceof |230,936|93|
|[False conditional] Using instanceof only|910,712,844|94|
|[False conditional] Using constructor name|910,964,236|97|
|[False conditional] Check if property is valid then instanceof |912,078,083|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:56:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":290692.7411382375,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228188.32469293973,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":230936.40175932803,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":910712843.8050499,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":910964236.0701406,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912078082.58517,"samples":7}]}-->
