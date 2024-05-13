## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,844,034|7922018|
|Setter|6,208,927|3104464|
|Method|15,750,292|7875147|
|DefineProperty (setter)|15,813,620|7906811|
|DefineProperty (setter & enumerable=false)|6,252,159|3126080|
|DefineProperty (setter & configurable=false)|6,231,594|3115798|
|DefineProperty (setter & enumerable=false & configurable=false)|6,250,017|3125009|
|DefineProperty (writable)|15,797,851|7898926|
|DefineProperty (writable & enumerable=false)|15,842,696|7921349|
|DefineProperty (writable & enumerable=false & configurable=false)|15,824,713|7912357|
|DefineProperties (setter)|15,856,251|7928126|
|DefineProperties (setter & enumerable=false)|6,230,135|3115068|
|DefineProperties (setter & enumerable=false & configurable=false)|6,194,791|3097396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:46:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15844034.985969152,"samples":7922018},{"name":"Setter","opsSec":6208927.416374483,"samples":3104464},{"name":"Method","opsSec":15750292.708466679,"samples":7875147},{"name":"DefineProperty (setter)","opsSec":15813620.924722198,"samples":7906811},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6252159.624878574,"samples":3126080},{"name":"DefineProperty (setter & configurable=false)","opsSec":6231594.267646586,"samples":3115798},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6250017.200019902,"samples":3125009},{"name":"DefineProperty (writable)","opsSec":15797851.90528619,"samples":7898926},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15842696.63757662,"samples":7921349},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15824713.715257993,"samples":7912357},{"name":"DefineProperties (setter)","opsSec":15856251.904928794,"samples":7928126},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6230135.825499838,"samples":3115068},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6194791.430171846,"samples":3097396}]}-->
