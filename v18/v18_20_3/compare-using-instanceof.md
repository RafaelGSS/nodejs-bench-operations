## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|393,102|196830|
|[True conditional] Using constructor name|310,599|155301|
|[True conditional] Check if property is valid then instanceof |312,744|156373|
|[False conditional] Using instanceof only|43,683,332|21863777|
|[False conditional] Using constructor name|101,473,851|50739576|
|[False conditional] Check if property is valid then instanceof |101,946,749|50984925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":393102.9448237727,"samples":196830},{"name":"[True conditional] Using constructor name","opsSec":310599.43693344644,"samples":155301},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312744.5663789077,"samples":156373},{"name":"[False conditional] Using instanceof only","opsSec":43683332.48885488,"samples":21863777},{"name":"[False conditional] Using constructor name","opsSec":101473851.00602344,"samples":50739576},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":101946749.68209603,"samples":50984925}]}-->
