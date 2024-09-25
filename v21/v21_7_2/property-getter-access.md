## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,356,604|7178303|
|Getter|12,052,720|6026361|
|Method|14,504,681|7252341|
|DefineProperty (getter)|13,880,939|6940470|
|DefineProperty (getter & enumerable=false)|12,049,790|6024896|
|DefineProperty (getter & configurable=false)|14,218,440|7109221|
|DefineProperty (getter & enumerable=false & configurable=false)|12,258,058|6129030|
|DefineProperty (writable)|14,570,567|7285284|
|DefineProperty (writable & enumerable=false)|14,388,731|7194366|
|DefineProperty (writable & enumerable=false & configurable=false)|13,543,832|6771917|
|DefineProperties (getter)|12,697,014|6348508|
|DefineProperties (getter & enumerable=false)|12,259,897|6129949|
|DefineProperties (getter & enumerable=false & configurable=false)|12,251,535|6125768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:11:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14356604.478256237,"samples":7178303},{"name":"Getter","opsSec":12052720.336631423,"samples":6026361},{"name":"Method","opsSec":14504681.97111769,"samples":7252341},{"name":"DefineProperty (getter)","opsSec":13880939.750166835,"samples":6940470},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12049790.361226378,"samples":6024896},{"name":"DefineProperty (getter & configurable=false)","opsSec":14218440.407472478,"samples":7109221},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12258058.260171218,"samples":6129030},{"name":"DefineProperty (writable)","opsSec":14570567.62099867,"samples":7285284},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14388731.079150632,"samples":7194366},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13543832.590941906,"samples":6771917},{"name":"DefineProperties (getter)","opsSec":12697014.527447354,"samples":6348508},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12259897.435901625,"samples":6129949},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12251535.582967175,"samples":6125768}]}-->
