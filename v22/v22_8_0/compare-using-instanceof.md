## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|417,256|208632|
|[True conditional] Using constructor name|330,951|165476|
|[True conditional] Check if property is valid then instanceof |341,005|170505|
|[False conditional] Using instanceof only|87,378,023|43689037|
|[False conditional] Using constructor name|87,069,759|43535246|
|[False conditional] Check if property is valid then instanceof |86,090,628|43047522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:08:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":417256.53611508204,"samples":208632},{"name":"[True conditional] Using constructor name","opsSec":330951.0521561866,"samples":165476},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":341005.6317178577,"samples":170505},{"name":"[False conditional] Using instanceof only","opsSec":87378023.32074647,"samples":43689037},{"name":"[False conditional] Using constructor name","opsSec":87069759.74332057,"samples":43535246},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":86090628.92818604,"samples":43047522}]}-->
