## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,520,924|100|
|Getter|94,853,520|96|
|Method|854,179,066|98|
|DefineProperty (getter)|855,199,032|99|
|DefineProperty (getter & enumerable=false)|95,133,209|96|
|DefineProperty (getter & configurable=false)|855,794,227|99|
|DefineProperty (getter & enumerable=false & configurable=false)|95,043,628|97|
|DefineProperty (writable)|855,667,214|96|
|DefineProperty (writable & enumerable=false)|855,156,520|95|
|DefineProperty (writable & enumerable=false & configurable=false)|383,372,175|47|
|DefineProperties (getter)|58,386,836|94|
|DefineProperties (getter & enumerable=false)|95,188,948|97|
|DefineProperties (getter & enumerable=false & configurable=false)|94,929,664|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:03:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854520924.3243573,"samples":7},{"name":"Getter","opsSec":94853519.69006278,"samples":6},{"name":"Method","opsSec":854179065.9432762,"samples":6},{"name":"DefineProperty (getter)","opsSec":855199031.6998036,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95133209.29954898,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":855794227.4029788,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95043627.98356473,"samples":5},{"name":"DefineProperty (writable)","opsSec":855667214.4842966,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":855156519.818849,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":383372175.10142094,"samples":6},{"name":"DefineProperties (getter)","opsSec":58386836.2360827,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95188948.13224001,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":94929663.98585536,"samples":6}]}-->
