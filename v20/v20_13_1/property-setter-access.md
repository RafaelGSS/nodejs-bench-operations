## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,258,319|9629160|
|Setter|6,821,833|3410917|
|Method|19,183,680|9591841|
|DefineProperty (setter)|19,226,153|9613077|
|DefineProperty (setter & enumerable=false)|6,783,336|3391669|
|DefineProperty (setter & configurable=false)|6,737,434|3368718|
|DefineProperty (setter & enumerable=false & configurable=false)|6,864,497|3432249|
|DefineProperty (writable)|19,192,946|9596474|
|DefineProperty (writable & enumerable=false)|19,154,430|9577216|
|DefineProperty (writable & enumerable=false & configurable=false)|19,190,671|9595336|
|DefineProperties (setter)|19,183,323|9591662|
|DefineProperties (setter & enumerable=false)|6,920,356|3460179|
|DefineProperties (setter & enumerable=false & configurable=false)|6,954,774|3477388|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19258319.691871386,"samples":9629160},{"name":"Setter","opsSec":6821833.249592554,"samples":3410917},{"name":"Method","opsSec":19183680.311838772,"samples":9591841},{"name":"DefineProperty (setter)","opsSec":19226153.115533706,"samples":9613077},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6783336.399115978,"samples":3391669},{"name":"DefineProperty (setter & configurable=false)","opsSec":6737434.167394246,"samples":3368718},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6864497.972575062,"samples":3432249},{"name":"DefineProperty (writable)","opsSec":19192946.61795544,"samples":9596474},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19154430.276191976,"samples":9577216},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19190671.385709107,"samples":9595336},{"name":"DefineProperties (setter)","opsSec":19183323.807191893,"samples":9591662},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6920356.380660127,"samples":3460179},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6954774.915058491,"samples":3477388}]}-->
