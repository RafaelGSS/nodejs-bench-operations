## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|655,626,966|83|
|Getter|49,043,052|88|
|Method|673,589,184|88|
|DefineProperty (getter)|659,358,234|87|
|DefineProperty (getter & enumerable=false)|48,378,128|87|
|DefineProperty (getter & configurable=false)|673,668,360|87|
|DefineProperty (getter & enumerable=false & configurable=false)|48,424,232|88|
|DefineProperty (writable)|646,796,236|84|
|DefineProperty (writable & enumerable=false)|624,925,048|84|
|DefineProperty (writable & enumerable=false & configurable=false)|621,295,088|88|
|DefineProperties (getter)|45,432,895|88|
|DefineProperties (getter & enumerable=false)|45,897,532|83|
|DefineProperties (getter & enumerable=false & configurable=false)|45,800,890|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":655626966.4390569,"samples":8},{"name":"Getter","opsSec":49043051.93218479,"samples":7},{"name":"Method","opsSec":673589183.6926804,"samples":8},{"name":"DefineProperty (getter)","opsSec":659358233.7027202,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48378128.22352022,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":673668360.1220033,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48424232.481092915,"samples":6},{"name":"DefineProperty (writable)","opsSec":646796236.4364731,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":624925048.4605443,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":621295087.6324165,"samples":6},{"name":"DefineProperties (getter)","opsSec":45432894.59945188,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45897531.955655105,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45800890.30545051,"samples":5}]}-->
