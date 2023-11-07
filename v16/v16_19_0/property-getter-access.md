## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,798,310|99|
|Getter|93,763,839|97|
|Method|850,004,746|98|
|DefineProperty (getter)|848,739,112|100|
|DefineProperty (getter & enumerable=false)|93,445,779|96|
|DefineProperty (getter & configurable=false)|849,478,564|94|
|DefineProperty (getter & enumerable=false & configurable=false)|93,830,837|94|
|DefineProperty (writable)|849,945,634|97|
|DefineProperty (writable & enumerable=false)|183,066,908|23|
|DefineProperty (writable & enumerable=false & configurable=false)|133,050,222|78|
|DefineProperties (getter)|56,433,171|90|
|DefineProperties (getter & enumerable=false)|93,936,504|93|
|DefineProperties (getter & enumerable=false & configurable=false)|93,840,394|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:50:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848798309.6652052,"samples":7},{"name":"Getter","opsSec":93763838.75172119,"samples":5},{"name":"Method","opsSec":850004746.0492723,"samples":7},{"name":"DefineProperty (getter)","opsSec":848739111.8794565,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93445778.84093712,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":849478563.9459602,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":93830836.63297722,"samples":7},{"name":"DefineProperty (writable)","opsSec":849945634.2088672,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":183066908.24220482,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":133050221.94467767,"samples":5},{"name":"DefineProperties (getter)","opsSec":56433171.11976525,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93936503.87490097,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93840394.10528402,"samples":5}]}-->
