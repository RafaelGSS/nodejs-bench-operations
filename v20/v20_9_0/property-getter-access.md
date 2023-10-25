## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|668,245,313|87|
|Getter|51,588,297|89|
|Method|645,456,147|87|
|DefineProperty (getter)|645,472,283|89|
|DefineProperty (getter & enumerable=false)|39,160,118|89|
|DefineProperty (getter & configurable=false)|637,615,150|92|
|DefineProperty (getter & enumerable=false & configurable=false)|48,143,327|91|
|DefineProperty (writable)|684,677,587|90|
|DefineProperty (writable & enumerable=false)|677,853,303|89|
|DefineProperty (writable & enumerable=false & configurable=false)|650,495,223|88|
|DefineProperties (getter)|46,959,322|95|
|DefineProperties (getter & enumerable=false)|40,124,813|78|
|DefineProperties (getter & enumerable=false & configurable=false)|27,196,701|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":668245312.944697,"samples":8},{"name":"Getter","opsSec":51588296.7697237,"samples":9},{"name":"Method","opsSec":645456147.1541146,"samples":5},{"name":"DefineProperty (getter)","opsSec":645472282.8481256,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":39160118.43489028,"samples":4},{"name":"DefineProperty (getter & configurable=false)","opsSec":637615149.6761731,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48143327.25969553,"samples":6},{"name":"DefineProperty (writable)","opsSec":684677587.2402549,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":677853302.8774275,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":650495223.4338434,"samples":5},{"name":"DefineProperties (getter)","opsSec":46959322.110557266,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":40124813.03561731,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":27196701.264920805,"samples":5}]}-->
