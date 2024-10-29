## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|133,706,878|66853462|
|Setter|11,020,361|5510183|
|Method|83,939,241|41971573|
|DefineProperty (setter)|85,474,393|42737287|
|DefineProperty (setter & enumerable=false)|11,338,321|5669164|
|DefineProperty (setter & configurable=false)|11,412,688|5706347|
|DefineProperty (setter & enumerable=false & configurable=false)|11,163,488|5581810|
|DefineProperty (writable)|93,986,633|46993323|
|DefineProperty (writable & enumerable=false)|95,636,253|47818137|
|DefineProperty (writable & enumerable=false & configurable=false)|94,019,491|47009761|
|DefineProperties (setter)|93,968,148|46988064|
|DefineProperties (setter & enumerable=false)|11,333,264|5666815|
|DefineProperties (setter & enumerable=false & configurable=false)|11,226,923|5613538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":133706878.80707496,"samples":66853462},{"name":"Setter","opsSec":11020361.591855364,"samples":5510183},{"name":"Method","opsSec":83939241.98585524,"samples":41971573},{"name":"DefineProperty (setter)","opsSec":85474393.30713256,"samples":42737287},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11338321.80927629,"samples":5669164},{"name":"DefineProperty (setter & configurable=false)","opsSec":11412688.681687076,"samples":5706347},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11163488.337818544,"samples":5581810},{"name":"DefineProperty (writable)","opsSec":93986633.96971086,"samples":46993323},{"name":"DefineProperty (writable & enumerable=false)","opsSec":95636253.91638668,"samples":47818137},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94019491.72572367,"samples":47009761},{"name":"DefineProperties (setter)","opsSec":93968148.41277309,"samples":46988064},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11333264.615548795,"samples":5666815},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11226923.92008858,"samples":5613538}]}-->
