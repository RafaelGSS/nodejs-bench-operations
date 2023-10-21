## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|536,312,482|85|
|Setter|5,548,494|92|
|Method|303,243,102|92|
|DefineProperty (setter)|538,414,104|83|
|DefineProperty (setter & enumerable=false)|5,558,657|92|
|DefineProperty (setter & configurable=false)|5,599,037|92|
|DefineProperty (setter & enumerable=false & configurable=false)|5,604,665|91|
|DefineProperty (writable)|585,876,475|94|
|DefineProperty (writable & enumerable=false)|70,965,909|52|
|DefineProperty (writable & enumerable=false & configurable=false)|67,101,894|78|
|DefineProperties (setter)|50,431,105|85|
|DefineProperties (setter & enumerable=false)|5,019,594|92|
|DefineProperties (setter & enumerable=false & configurable=false)|5,405,424|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":536312482.2620147,"samples":8},{"name":"Setter","opsSec":5548494.485961522,"samples":5},{"name":"Method","opsSec":303243101.7762311,"samples":6},{"name":"DefineProperty (setter)","opsSec":538414103.7873316,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5558657.387015978,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":5599037.255179316,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5604665.179179852,"samples":6},{"name":"DefineProperty (writable)","opsSec":585876475.1234941,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":70965909.26259995,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":67101894.35705832,"samples":6},{"name":"DefineProperties (setter)","opsSec":50431104.8063776,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5019594.218280127,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5405424.272326946,"samples":5}]}-->
