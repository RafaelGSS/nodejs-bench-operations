## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|477,620,103|98|
|Setter|7,202,045|94|
|Method|477,447,590|95|
|DefineProperty (setter)|476,396,863|97|
|DefineProperty (setter & enumerable=false)|7,175,160|91|
|DefineProperty (setter & configurable=false)|7,210,173|94|
|DefineProperty (setter & enumerable=false & configurable=false)|6,975,662|96|
|DefineProperty (writable)|711,747,074|93|
|DefineProperty (writable & enumerable=false)|477,363,791|66|
|DefineProperty (writable & enumerable=false & configurable=false)|86,806,236|79|
|DefineProperties (setter)|68,927,442|83|
|DefineProperties (setter & enumerable=false)|7,245,965|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,194,301|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":477620102.90645236,"samples":6},{"name":"Setter","opsSec":7202045.013227475,"samples":5},{"name":"Method","opsSec":477447590.1849844,"samples":7},{"name":"DefineProperty (setter)","opsSec":476396862.8733079,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7175160.450809124,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":7210172.771196721,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6975661.612546631,"samples":5},{"name":"DefineProperty (writable)","opsSec":711747073.7659411,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":477363790.87079173,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":86806235.8102737,"samples":6},{"name":"DefineProperties (setter)","opsSec":68927442.3907632,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7245964.5485527795,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7194301.267405498,"samples":5}]}-->
