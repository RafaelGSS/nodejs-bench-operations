## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|149,782,416|74891562|
|Getter|49,224,533|24612271|
|Method|100,477,459|50238819|
|DefineProperty (getter)|99,051,657|49538847|
|DefineProperty (getter & enumerable=false)|46,221,888|23110973|
|DefineProperty (getter & configurable=false)|98,435,985|49217998|
|DefineProperty (getter & enumerable=false & configurable=false)|51,897,065|25949101|
|DefineProperty (writable)|98,838,767|49419463|
|DefineProperty (writable & enumerable=false)|97,276,532|48638272|
|DefineProperty (writable & enumerable=false & configurable=false)|96,580,045|48290253|
|DefineProperties (getter)|49,966,247|24983128|
|DefineProperties (getter & enumerable=false)|51,597,698|25798853|
|DefineProperties (getter & enumerable=false & configurable=false)|50,837,472|25423800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:55:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":149782416.4278648,"samples":74891562},{"name":"Getter","opsSec":49224533.23803308,"samples":24612271},{"name":"Method","opsSec":100477459.35107729,"samples":50238819},{"name":"DefineProperty (getter)","opsSec":99051657.08331576,"samples":49538847},{"name":"DefineProperty (getter & enumerable=false)","opsSec":46221888.68485803,"samples":23110973},{"name":"DefineProperty (getter & configurable=false)","opsSec":98435985.7626575,"samples":49217998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51897065.76564212,"samples":25949101},{"name":"DefineProperty (writable)","opsSec":98838767.26493977,"samples":49419463},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97276532.7159222,"samples":48638272},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96580045.31318384,"samples":48290253},{"name":"DefineProperties (getter)","opsSec":49966247.00607554,"samples":24983128},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51597698.36354064,"samples":25798853},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50837472.76872469,"samples":25423800}]}-->
