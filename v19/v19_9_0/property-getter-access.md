## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|718,468,650|84|
|Getter|58,389,142|92|
|Method|725,545,487|87|
|DefineProperty (getter)|730,074,677|93|
|DefineProperty (getter & enumerable=false)|56,922,660|87|
|DefineProperty (getter & configurable=false)|720,557,066|89|
|DefineProperty (getter & enumerable=false & configurable=false)|53,405,587|87|
|DefineProperty (writable)|697,626,909|88|
|DefineProperty (writable & enumerable=false)|678,956,616|87|
|DefineProperty (writable & enumerable=false & configurable=false)|134,843,783|19|
|DefineProperties (getter)|34,032,711|82|
|DefineProperties (getter & enumerable=false)|34,205,583|83|
|DefineProperties (getter & enumerable=false & configurable=false)|53,799,503|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":718468650.2301061,"samples":8},{"name":"Getter","opsSec":58389141.580485374,"samples":5},{"name":"Method","opsSec":725545486.5337082,"samples":7},{"name":"DefineProperty (getter)","opsSec":730074676.9689289,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56922660.33574964,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":720557066.1180242,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53405587.28368526,"samples":9},{"name":"DefineProperty (writable)","opsSec":697626908.8639646,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":678956616.1180685,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":134843782.84644958,"samples":6},{"name":"DefineProperties (getter)","opsSec":34032711.38904726,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":34205582.84589846,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53799502.74699152,"samples":6}]}-->
