## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|13,773,004|6886503|
|Setter|5,522,987|2761494|
|Method|13,991,280|6995641|
|DefineProperty (setter)|14,218,488|7109245|
|DefineProperty (setter & enumerable=false)|5,651,216|2825609|
|DefineProperty (setter & configurable=false)|5,661,469|2830735|
|DefineProperty (setter & enumerable=false & configurable=false)|5,703,932|2852011|
|DefineProperty (writable)|14,303,283|7151642|
|DefineProperty (writable & enumerable=false)|13,472,148|6736075|
|DefineProperty (writable & enumerable=false & configurable=false)|13,392,271|6696137|
|DefineProperties (setter)|13,380,082|6690042|
|DefineProperties (setter & enumerable=false)|5,512,490|2756246|
|DefineProperties (setter & enumerable=false & configurable=false)|5,519,832|2759917|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:29:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":13773004.501485698,"samples":6886503},{"name":"Setter","opsSec":5522987.555030271,"samples":2761494},{"name":"Method","opsSec":13991280.08599134,"samples":6995641},{"name":"DefineProperty (setter)","opsSec":14218488.4099537,"samples":7109245},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5651216.999630923,"samples":2825609},{"name":"DefineProperty (setter & configurable=false)","opsSec":5661469.036791583,"samples":2830735},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5703932.023623916,"samples":2852011},{"name":"DefineProperty (writable)","opsSec":14303283.902650343,"samples":7151642},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13472148.37557589,"samples":6736075},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13392271.588661825,"samples":6696137},{"name":"DefineProperties (setter)","opsSec":13380082.18435731,"samples":6690042},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5512490.333143712,"samples":2756246},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5519832.189450411,"samples":2759917}]}-->
