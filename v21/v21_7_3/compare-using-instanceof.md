## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|314,311|157156|
|[True conditional] Using constructor name|325,194|162598|
|[True conditional] Check if property is valid then instanceof |332,029|166015|
|[False conditional] Using instanceof only|15,204,959|7602480|
|[False conditional] Using constructor name|15,240,681|7620342|
|[False conditional] Check if property is valid then instanceof |15,280,638|7640320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":314311.2588540121,"samples":157156},{"name":"[True conditional] Using constructor name","opsSec":325194.1379383782,"samples":162598},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332029.29144952487,"samples":166015},{"name":"[False conditional] Using instanceof only","opsSec":15204959.99998812,"samples":7602480},{"name":"[False conditional] Using constructor name","opsSec":15240681.957734978,"samples":7620342},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15280638.533036355,"samples":7640320}]}-->
