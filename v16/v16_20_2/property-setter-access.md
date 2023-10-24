## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,470,820|95|
|Setter|6,982,174|93|
|Method|478,207,967|96|
|DefineProperty (setter)|477,305,963|99|
|DefineProperty (setter & enumerable=false)|7,242,906|95|
|DefineProperty (setter & configurable=false)|7,254,464|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,295,122|95|
|DefineProperty (writable)|712,497,175|91|
|DefineProperty (writable & enumerable=false)|74,679,193|36|
|DefineProperty (writable & enumerable=false & configurable=false)|76,860,619|76|
|DefineProperties (setter)|62,650,289|80|
|DefineProperties (setter & enumerable=false)|6,424,828|92|
|DefineProperties (setter & enumerable=false & configurable=false)|7,020,313|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478470820.0377592,"samples":6},{"name":"Setter","opsSec":6982173.513040938,"samples":5},{"name":"Method","opsSec":478207966.6307366,"samples":7},{"name":"DefineProperty (setter)","opsSec":477305963.3943987,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7242905.5386748705,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":7254464.462749288,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7295121.792099639,"samples":6},{"name":"DefineProperty (writable)","opsSec":712497175.2294087,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":74679192.61948496,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":76860619.21865411,"samples":5},{"name":"DefineProperties (setter)","opsSec":62650289.19055999,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6424828.340993308,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7020313.228779117,"samples":7}]}-->
