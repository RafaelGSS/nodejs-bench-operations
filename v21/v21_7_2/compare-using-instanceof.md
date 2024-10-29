## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|424,890|212508|
|[True conditional] Using constructor name|355,140|177580|
|[True conditional] Check if property is valid then instanceof |347,584|173793|
|[False conditional] Using instanceof only|101,795,566|50897791|
|[False conditional] Using constructor name|99,727,975|49864025|
|[False conditional] Check if property is valid then instanceof |100,692,606|50346310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":424890.469509907,"samples":212508},{"name":"[True conditional] Using constructor name","opsSec":355140.7144386431,"samples":177580},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":347584.64372472017,"samples":173793},{"name":"[False conditional] Using instanceof only","opsSec":101795566.93425609,"samples":50897791},{"name":"[False conditional] Using constructor name","opsSec":99727975.6029302,"samples":49864025},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":100692606.10442035,"samples":50346310}]}-->
