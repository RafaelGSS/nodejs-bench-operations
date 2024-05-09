## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,832,051|7916026|
|Setter|6,472,548|3236275|
|Method|15,850,434|7925218|
|DefineProperty (setter)|15,912,594|7956298|
|DefineProperty (setter & enumerable=false)|6,416,532|3208267|
|DefineProperty (setter & configurable=false)|6,536,699|3268350|
|DefineProperty (setter & enumerable=false & configurable=false)|6,336,135|3168068|
|DefineProperty (writable)|15,911,780|7955891|
|DefineProperty (writable & enumerable=false)|15,905,490|7952746|
|DefineProperty (writable & enumerable=false & configurable=false)|15,946,154|7973078|
|DefineProperties (setter)|15,953,709|7976855|
|DefineProperties (setter & enumerable=false)|6,462,383|3231192|
|DefineProperties (setter & enumerable=false & configurable=false)|6,455,701|3227851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15832051.904980917,"samples":7916026},{"name":"Setter","opsSec":6472548.783182656,"samples":3236275},{"name":"Method","opsSec":15850434.573540037,"samples":7925218},{"name":"DefineProperty (setter)","opsSec":15912594.88624285,"samples":7956298},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6416532.036532176,"samples":3208267},{"name":"DefineProperty (setter & configurable=false)","opsSec":6536699.346326278,"samples":3268350},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6336135.923946889,"samples":3168068},{"name":"DefineProperty (writable)","opsSec":15911780.37714639,"samples":7955891},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15905490.218482535,"samples":7952746},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15946154.373507367,"samples":7973078},{"name":"DefineProperties (setter)","opsSec":15953709.585407825,"samples":7976855},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6462383.069422823,"samples":3231192},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6455701.754714063,"samples":3227851}]}-->
