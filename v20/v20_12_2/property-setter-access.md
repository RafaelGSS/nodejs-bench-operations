## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|868,255,173|98|
|Setter|12,800,981|93|
|Method|697,201,383|93|
|DefineProperty (setter)|870,856,941|99|
|DefineProperty (setter & enumerable=false)|12,776,997|94|
|DefineProperty (setter & configurable=false)|12,637,540|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,737,031|93|
|DefineProperty (writable)|872,414,924|97|
|DefineProperty (writable & enumerable=false)|872,514,803|100|
|DefineProperty (writable & enumerable=false & configurable=false)|871,879,616|96|
|DefineProperties (setter)|751,356,655|79|
|DefineProperties (setter & enumerable=false)|12,781,538|96|
|DefineProperties (setter & enumerable=false & configurable=false)|12,201,793|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:04:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":868255172.631416,"samples":6},{"name":"Setter","opsSec":12800980.788479827,"samples":4},{"name":"Method","opsSec":697201383.3504018,"samples":10},{"name":"DefineProperty (setter)","opsSec":870856941.1606449,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12776996.735440457,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12637539.968222935,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12737031.042492855,"samples":5},{"name":"DefineProperty (writable)","opsSec":872414924.0810813,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872514803.0875407,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":871879615.5388029,"samples":7},{"name":"DefineProperties (setter)","opsSec":751356654.5525831,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12781538.234875126,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12201792.76716899,"samples":5}]}-->
