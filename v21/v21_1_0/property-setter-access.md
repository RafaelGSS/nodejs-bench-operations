## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|572,997,096|82|
|Setter|7,076,096|85|
|Method|593,206,620|86|
|DefineProperty (setter)|574,917,413|87|
|DefineProperty (setter & enumerable=false)|7,078,691|87|
|DefineProperty (setter & configurable=false)|7,331,518|82|
|DefineProperty (setter & enumerable=false & configurable=false)|7,333,610|83|
|DefineProperty (writable)|582,510,792|82|
|DefineProperty (writable & enumerable=false)|603,371,393|87|
|DefineProperty (writable & enumerable=false & configurable=false)|466,421,230|68|
|DefineProperties (setter)|549,981,562|80|
|DefineProperties (setter & enumerable=false)|6,691,355|87|
|DefineProperties (setter & enumerable=false & configurable=false)|6,648,044|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":572997096.1106516,"samples":6},{"name":"Setter","opsSec":7076095.846181372,"samples":6},{"name":"Method","opsSec":593206620.2630024,"samples":7},{"name":"DefineProperty (setter)","opsSec":574917413.0103852,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7078691.216090669,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7331517.739678454,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7333609.773759889,"samples":4},{"name":"DefineProperty (writable)","opsSec":582510792.100051,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":603371393.0796366,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":466421230.2207872,"samples":6},{"name":"DefineProperties (setter)","opsSec":549981562.3649402,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6691355.227291437,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6648043.852068301,"samples":4}]}-->
