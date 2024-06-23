## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,701|158351|
|[True conditional] Using constructor name|313,201|156601|
|[True conditional] Check if property is valid then instanceof |315,407|157704|
|[False conditional] Using instanceof only|15,938,536|7969269|
|[False conditional] Using constructor name|16,392,370|8196186|
|[False conditional] Check if property is valid then instanceof |16,387,944|8193973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:00:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316701.08659614157,"samples":158351},{"name":"[True conditional] Using constructor name","opsSec":313201.2645788712,"samples":156601},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315407.1913200594,"samples":157704},{"name":"[False conditional] Using instanceof only","opsSec":15938536.20956365,"samples":7969269},{"name":"[False conditional] Using constructor name","opsSec":16392370.261677993,"samples":8196186},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16387944.687222153,"samples":8193973}]}-->
