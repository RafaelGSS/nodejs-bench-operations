## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|139,357,176|69748575|
|Getter|52,866,461|26433238|
|Method|100,831,913|50415966|
|DefineProperty (getter)|86,262,667|43168255|
|DefineProperty (getter & enumerable=false)|53,435,342|26719023|
|DefineProperty (getter & configurable=false)|101,452,757|50726385|
|DefineProperty (getter & enumerable=false & configurable=false)|52,912,250|26456141|
|DefineProperty (writable)|102,048,020|51024843|
|DefineProperty (writable & enumerable=false)|101,573,435|50786727|
|DefineProperty (writable & enumerable=false & configurable=false)|101,361,895|50681007|
|DefineProperties (getter)|50,929,186|25464597|
|DefineProperties (getter & enumerable=false)|53,558,349|26780450|
|DefineProperties (getter & enumerable=false & configurable=false)|53,500,802|26750774|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:53:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":139357176.58597916,"samples":69748575},{"name":"Getter","opsSec":52866461.51458954,"samples":26433238},{"name":"Method","opsSec":100831913.8502555,"samples":50415966},{"name":"DefineProperty (getter)","opsSec":86262667.60380314,"samples":43168255},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53435342.06482084,"samples":26719023},{"name":"DefineProperty (getter & configurable=false)","opsSec":101452757.41985807,"samples":50726385},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52912250.67594761,"samples":26456141},{"name":"DefineProperty (writable)","opsSec":102048020.98448962,"samples":51024843},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101573435.71678157,"samples":50786727},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101361895.20385882,"samples":50681007},{"name":"DefineProperties (getter)","opsSec":50929186.768055476,"samples":25464597},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53558349.65850596,"samples":26780450},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53500802.19881734,"samples":26750774}]}-->
