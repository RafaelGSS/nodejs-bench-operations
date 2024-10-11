## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|146,476,172|73238109|
|Getter|50,730,736|25386675|
|Method|98,170,661|49085341|
|DefineProperty (getter)|100,546,805|50273538|
|DefineProperty (getter & enumerable=false)|51,223,026|25619513|
|DefineProperty (getter & configurable=false)|99,849,754|49926266|
|DefineProperty (getter & enumerable=false & configurable=false)|51,672,360|25837319|
|DefineProperty (writable)|98,757,294|49378885|
|DefineProperty (writable & enumerable=false)|98,884,315|49442171|
|DefineProperty (writable & enumerable=false & configurable=false)|96,236,234|48118150|
|DefineProperties (getter)|50,821,909|25410957|
|DefineProperties (getter & enumerable=false)|50,674,795|25467204|
|DefineProperties (getter & enumerable=false & configurable=false)|52,145,826|26072956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":146476172.88533875,"samples":73238109},{"name":"Getter","opsSec":50730736.58711272,"samples":25386675},{"name":"Method","opsSec":98170661.3841611,"samples":49085341},{"name":"DefineProperty (getter)","opsSec":100546805.52909312,"samples":50273538},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51223026.18043438,"samples":25619513},{"name":"DefineProperty (getter & configurable=false)","opsSec":99849754.77892058,"samples":49926266},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51672360.17901859,"samples":25837319},{"name":"DefineProperty (writable)","opsSec":98757294.18735659,"samples":49378885},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98884315.30123487,"samples":49442171},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96236234.36688817,"samples":48118150},{"name":"DefineProperties (getter)","opsSec":50821909.8326034,"samples":25410957},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50674795.85202092,"samples":25467204},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52145826.48084457,"samples":26072956}]}-->
