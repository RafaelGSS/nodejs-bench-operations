## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,898,555|8449278|
|Setter|6,202,177|3101089|
|Method|16,718,844|8359423|
|DefineProperty (setter)|16,791,782|8395892|
|DefineProperty (setter & enumerable=false)|6,241,360|3120681|
|DefineProperty (setter & configurable=false)|6,396,681|3198341|
|DefineProperty (setter & enumerable=false & configurable=false)|6,218,472|3109237|
|DefineProperty (writable)|16,815,832|8407917|
|DefineProperty (writable & enumerable=false)|16,835,216|8417609|
|DefineProperty (writable & enumerable=false & configurable=false)|15,187,633|7593817|
|DefineProperties (setter)|16,810,522|8405262|
|DefineProperties (setter & enumerable=false)|5,868,124|2934063|
|DefineProperties (setter & enumerable=false & configurable=false)|5,860,187|2930094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:45:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16898555.787977576,"samples":8449278},{"name":"Setter","opsSec":6202177.4307065355,"samples":3101089},{"name":"Method","opsSec":16718844.443123123,"samples":8359423},{"name":"DefineProperty (setter)","opsSec":16791782.770120587,"samples":8395892},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6241360.238269292,"samples":3120681},{"name":"DefineProperty (setter & configurable=false)","opsSec":6396681.081754279,"samples":3198341},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6218472.741354159,"samples":3109237},{"name":"DefineProperty (writable)","opsSec":16815832.71028824,"samples":8407917},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16835216.225292075,"samples":8417609},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15187633.239813387,"samples":7593817},{"name":"DefineProperties (setter)","opsSec":16810522.715016562,"samples":8405262},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5868124.175492712,"samples":2934063},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5860187.38274224,"samples":2930094}]}-->
