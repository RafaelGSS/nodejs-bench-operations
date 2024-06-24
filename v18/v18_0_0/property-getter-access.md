## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|21,070,157|10535079|
|Getter|17,272,778|8636390|
|Method|20,206,433|10103217|
|DefineProperty (getter)|20,212,913|10106457|
|DefineProperty (getter & enumerable=false)|16,498,829|8249416|
|DefineProperty (getter & configurable=false)|20,497,764|10248883|
|DefineProperty (getter & enumerable=false & configurable=false)|16,306,998|8153500|
|DefineProperty (writable)|19,798,632|9899317|
|DefineProperty (writable & enumerable=false)|20,195,271|10097636|
|DefineProperty (writable & enumerable=false & configurable=false)|19,666,147|9833075|
|DefineProperties (getter)|16,853,498|8426750|
|DefineProperties (getter & enumerable=false)|16,523,479|8261740|
|DefineProperties (getter & enumerable=false & configurable=false)|16,743,010|8371506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:31:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":21070157.440113332,"samples":10535079},{"name":"Getter","opsSec":17272778.492853142,"samples":8636390},{"name":"Method","opsSec":20206433.55482465,"samples":10103217},{"name":"DefineProperty (getter)","opsSec":20212913.489661228,"samples":10106457},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16498829.893603893,"samples":8249416},{"name":"DefineProperty (getter & configurable=false)","opsSec":20497764.161477342,"samples":10248883},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16306998.054505268,"samples":8153500},{"name":"DefineProperty (writable)","opsSec":19798632.096145354,"samples":9899317},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20195271.901782993,"samples":10097636},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19666147.43370161,"samples":9833075},{"name":"DefineProperties (getter)","opsSec":16853498.09754538,"samples":8426750},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16523479.756981812,"samples":8261740},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16743010.7609376,"samples":8371506}]}-->
