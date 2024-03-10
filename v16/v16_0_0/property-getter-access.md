## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|895,444,884|94|
|Getter|80,582,903|92|
|Method|896,232,798|95|
|DefineProperty (getter)|897,887,027|98|
|DefineProperty (getter & enumerable=false)|79,836,154|92|
|DefineProperty (getter & configurable=false)|899,585,511|99|
|DefineProperty (getter & enumerable=false & configurable=false)|81,043,130|97|
|DefineProperty (writable)|756,289,835|84|
|DefineProperty (writable & enumerable=false)|110,166,767|84|
|DefineProperty (writable & enumerable=false & configurable=false)|113,463,523|86|
|DefineProperties (getter)|49,093,803|93|
|DefineProperties (getter & enumerable=false)|80,911,381|97|
|DefineProperties (getter & enumerable=false & configurable=false)|80,585,726|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":895444883.5072469,"samples":6},{"name":"Getter","opsSec":80582902.6168457,"samples":6},{"name":"Method","opsSec":896232797.6997184,"samples":8},{"name":"DefineProperty (getter)","opsSec":897887026.7430017,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":79836153.50902006,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":899585511.0247027,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":81043129.6057655,"samples":5},{"name":"DefineProperty (writable)","opsSec":756289835.0090395,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":110166766.88463825,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":113463522.9411841,"samples":4},{"name":"DefineProperties (getter)","opsSec":49093803.221881725,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":80911381.17744036,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":80585725.66626428,"samples":6}]}-->
