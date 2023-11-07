## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,853,719|93|
|Getter|95,343,100|96|
|Method|856,156,072|100|
|DefineProperty (getter)|856,210,861|100|
|DefineProperty (getter & enumerable=false)|95,307,781|96|
|DefineProperty (getter & configurable=false)|855,607,433|98|
|DefineProperty (getter & enumerable=false & configurable=false)|95,303,706|98|
|DefineProperty (writable)|856,630,745|97|
|DefineProperty (writable & enumerable=false)|856,469,505|100|
|DefineProperty (writable & enumerable=false & configurable=false)|856,106,939|96|
|DefineProperties (getter)|63,453,616|67|
|DefineProperties (getter & enumerable=false)|56,881,475|87|
|DefineProperties (getter & enumerable=false & configurable=false)|95,166,957|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854853719.3130174,"samples":7},{"name":"Getter","opsSec":95343100.2574482,"samples":5},{"name":"Method","opsSec":856156071.7782575,"samples":7},{"name":"DefineProperty (getter)","opsSec":856210861.3402681,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95307781.49496934,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":855607433.0013385,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95303706.00345857,"samples":6},{"name":"DefineProperty (writable)","opsSec":856630744.7877289,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":856469505.0903809,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":856106938.895564,"samples":7},{"name":"DefineProperties (getter)","opsSec":63453616.106404886,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56881474.57575094,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":95166957.32571647,"samples":5}]}-->
