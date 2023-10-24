## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|726,763,790|81|
|Getter|52,580,923|85|
|Method|742,109,517|86|
|DefineProperty (getter)|733,908,972|88|
|DefineProperty (getter & enumerable=false)|53,408,830|88|
|DefineProperty (getter & configurable=false)|756,295,987|88|
|DefineProperty (getter & enumerable=false & configurable=false)|52,012,920|86|
|DefineProperty (writable)|763,938,360|91|
|DefineProperty (writable & enumerable=false)|774,663,496|88|
|DefineProperty (writable & enumerable=false & configurable=false)|761,978,097|90|
|DefineProperties (getter)|53,284,688|87|
|DefineProperties (getter & enumerable=false)|54,798,806|87|
|DefineProperties (getter & enumerable=false & configurable=false)|55,406,648|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":726763789.9700896,"samples":5},{"name":"Getter","opsSec":52580922.91484776,"samples":5},{"name":"Method","opsSec":742109517.0964053,"samples":7},{"name":"DefineProperty (getter)","opsSec":733908972.3928226,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53408829.711064495,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":756295987.2539452,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52012919.699158765,"samples":6},{"name":"DefineProperty (writable)","opsSec":763938360.0717075,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":774663496.06584,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":761978097.3793749,"samples":10},{"name":"DefineProperties (getter)","opsSec":53284687.87670842,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":54798806.22578334,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55406648.425731115,"samples":7}]}-->
