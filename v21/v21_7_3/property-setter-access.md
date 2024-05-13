## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,040,335|7520168|
|Setter|6,845,937|3422969|
|Method|15,094,523|7547262|
|DefineProperty (setter)|15,065,769|7532885|
|DefineProperty (setter & enumerable=false)|6,801,939|3400970|
|DefineProperty (setter & configurable=false)|6,749,350|3374676|
|DefineProperty (setter & enumerable=false & configurable=false)|6,783,788|3391895|
|DefineProperty (writable)|15,067,285|7533643|
|DefineProperty (writable & enumerable=false)|15,106,583|7553292|
|DefineProperty (writable & enumerable=false & configurable=false)|15,105,445|7552723|
|DefineProperties (setter)|15,106,158|7553080|
|DefineProperties (setter & enumerable=false)|6,728,232|3364117|
|DefineProperties (setter & enumerable=false & configurable=false)|6,725,619|3362810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15040335.308143698,"samples":7520168},{"name":"Setter","opsSec":6845937.89047046,"samples":3422969},{"name":"Method","opsSec":15094523.396189976,"samples":7547262},{"name":"DefineProperty (setter)","opsSec":15065769.487748591,"samples":7532885},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6801939.673536083,"samples":3400970},{"name":"DefineProperty (setter & configurable=false)","opsSec":6749350.9471389055,"samples":3374676},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6783788.304029891,"samples":3391895},{"name":"DefineProperty (writable)","opsSec":15067285.849352853,"samples":7533643},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15106583.788500613,"samples":7553292},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15105445.758443136,"samples":7552723},{"name":"DefineProperties (setter)","opsSec":15106158.942507405,"samples":7553080},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6728232.560266227,"samples":3364117},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6725619.609830153,"samples":3362810}]}-->
