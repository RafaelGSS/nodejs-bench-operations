## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|149,380,778|85|
|Getter|64,489,567|90|
|Method|141,964,797|81|
|DefineProperty (getter)|146,076,214|84|
|DefineProperty (getter & enumerable=false)|64,454,984|87|
|DefineProperty (getter & configurable=false)|148,332,210|84|
|DefineProperty (getter & enumerable=false & configurable=false)|64,757,724|90|
|DefineProperty (writable)|147,054,031|83|
|DefineProperty (writable & enumerable=false)|146,723,607|83|
|DefineProperty (writable & enumerable=false & configurable=false)|149,694,166|85|
|DefineProperties (getter)|65,224,228|90|
|DefineProperties (getter & enumerable=false)|66,135,004|93|
|DefineProperties (getter & enumerable=false & configurable=false)|64,986,898|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:54:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":149380778.07921827,"samples":7},{"name":"Getter","opsSec":64489567.232094035,"samples":5},{"name":"Method","opsSec":141964797.093062,"samples":7},{"name":"DefineProperty (getter)","opsSec":146076213.99551684,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":64454984.482747756,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":148332210.41679463,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":64757724.30289284,"samples":5},{"name":"DefineProperty (writable)","opsSec":147054030.8571102,"samples":4},{"name":"DefineProperty (writable & enumerable=false)","opsSec":146723606.987097,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":149694165.74434295,"samples":5},{"name":"DefineProperties (getter)","opsSec":65224227.65588639,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":66135004.10718884,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64986898.02356878,"samples":5}]}-->
