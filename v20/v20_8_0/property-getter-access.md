## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|681,528,615|89|
|Getter|50,860,424|88|
|Method|697,892,646|91|
|DefineProperty (getter)|694,959,131|88|
|DefineProperty (getter & enumerable=false)|48,966,876|87|
|DefineProperty (getter & configurable=false)|691,874,498|90|
|DefineProperty (getter & enumerable=false & configurable=false)|51,385,666|87|
|DefineProperty (writable)|724,783,450|89|
|DefineProperty (writable & enumerable=false)|710,689,196|87|
|DefineProperty (writable & enumerable=false & configurable=false)|169,832,718|21|
|DefineProperties (getter)|30,572,924|84|
|DefineProperties (getter & enumerable=false)|31,604,200|83|
|DefineProperties (getter & enumerable=false & configurable=false)|51,444,590|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":681528615.1547203,"samples":6},{"name":"Getter","opsSec":50860424.02456426,"samples":6},{"name":"Method","opsSec":697892646.2797625,"samples":7},{"name":"DefineProperty (getter)","opsSec":694959130.6038502,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48966876.34703692,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":691874497.852425,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51385665.81995732,"samples":6},{"name":"DefineProperty (writable)","opsSec":724783450.393159,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":710689196.2749329,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":169832717.54717663,"samples":7},{"name":"DefineProperties (getter)","opsSec":30572924.06638441,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":31604200.184535675,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51444590.07547817,"samples":4}]}-->
