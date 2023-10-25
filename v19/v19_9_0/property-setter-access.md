## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,949,322|98|
|Setter|8,392,215|97|
|Method|588,245,440|97|
|DefineProperty (setter)|588,688,906|92|
|DefineProperty (setter & enumerable=false)|8,422,824|96|
|DefineProperty (setter & configurable=false)|8,485,589|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,464,274|98|
|DefineProperty (writable)|594,541,337|96|
|DefineProperty (writable & enumerable=false)|596,757,602|96|
|DefineProperty (writable & enumerable=false & configurable=false)|594,693,305|98|
|DefineProperties (setter)|596,123,894|98|
|DefineProperties (setter & enumerable=false)|7,764,263|91|
|DefineProperties (setter & enumerable=false & configurable=false)|7,675,114|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":587949321.5357633,"samples":6},{"name":"Setter","opsSec":8392214.836011695,"samples":5},{"name":"Method","opsSec":588245439.940387,"samples":6},{"name":"DefineProperty (setter)","opsSec":588688905.9421128,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8422824.185883362,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8485589.099289842,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8464273.740366917,"samples":6},{"name":"DefineProperty (writable)","opsSec":594541336.9740262,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":596757601.7183518,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":594693304.8060102,"samples":6},{"name":"DefineProperties (setter)","opsSec":596123893.6296272,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7764263.3307999335,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7675114.035904546,"samples":5}]}-->
