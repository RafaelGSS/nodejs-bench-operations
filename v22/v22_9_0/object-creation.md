## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,586,636|21306387|
|Object.create({})|1,952,616|983951|
|Cached Empty.prototype|73,515,860|36758748|
|Empty.prototype|2,397,832|1213550|
|Empty class|1,509,930|754966|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:20:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":42586636.36675663,"samples":21306387},{"name":"Object.create({})","opsSec":1952616.7520451832,"samples":983951},{"name":"Cached Empty.prototype","opsSec":73515860.41913739,"samples":36758748},{"name":"Empty.prototype","opsSec":2397832.715674309,"samples":1213550},{"name":"Empty class","opsSec":1509930.556506388,"samples":754966}]}-->
