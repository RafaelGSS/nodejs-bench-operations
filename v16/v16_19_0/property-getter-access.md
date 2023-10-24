## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|662,085,529|83|
|Getter|50,548,196|81|
|Method|697,038,816|89|
|DefineProperty (getter)|716,271,917|88|
|DefineProperty (getter & enumerable=false)|51,194,965|86|
|DefineProperty (getter & configurable=false)|705,561,501|86|
|DefineProperty (getter & enumerable=false & configurable=false)|51,077,696|91|
|DefineProperty (writable)|702,523,381|87|
|DefineProperty (writable & enumerable=false)|664,161,902|89|
|DefineProperty (writable & enumerable=false & configurable=false)|77,486,075|81|
|DefineProperties (getter)|32,773,254|83|
|DefineProperties (getter & enumerable=false)|32,435,170|80|
|DefineProperties (getter & enumerable=false & configurable=false)|53,477,417|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":662085528.6165806,"samples":6},{"name":"Getter","opsSec":50548196.27780487,"samples":5},{"name":"Method","opsSec":697038815.7842381,"samples":7},{"name":"DefineProperty (getter)","opsSec":716271917.2580218,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51194965.29012771,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":705561501.133398,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51077695.66186603,"samples":5},{"name":"DefineProperty (writable)","opsSec":702523381.3669993,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":664161901.9039012,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":77486074.95229727,"samples":5},{"name":"DefineProperties (getter)","opsSec":32773254.026850786,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":32435170.276012868,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53477417.41100435,"samples":9}]}-->
