## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|780,265,618|98|
|Setter|11,625,220|96|
|Method|629,668,332|98|
|DefineProperty (setter)|753,092,053|97|
|DefineProperty (setter & enumerable=false)|11,707,647|93|
|DefineProperty (setter & configurable=false)|11,947,832|96|
|DefineProperty (setter & enumerable=false & configurable=false)|10,579,456|91|
|DefineProperty (writable)|787,346,172|97|
|DefineProperty (writable & enumerable=false)|786,405,130|98|
|DefineProperty (writable & enumerable=false & configurable=false)|786,532,588|97|
|DefineProperties (setter)|677,155,181|79|
|DefineProperties (setter & enumerable=false)|11,590,446|94|
|DefineProperties (setter & enumerable=false & configurable=false)|11,267,341|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":780265618.2845942,"samples":6},{"name":"Setter","opsSec":11625219.50490076,"samples":6},{"name":"Method","opsSec":629668332.3087596,"samples":7},{"name":"DefineProperty (setter)","opsSec":753092053.4439439,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11707647.312761186,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11947831.599039456,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10579456.48488755,"samples":6},{"name":"DefineProperty (writable)","opsSec":787346171.5638114,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786405130.0551926,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786532588.3733943,"samples":7},{"name":"DefineProperties (setter)","opsSec":677155181.0226498,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11590446.004983978,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11267340.750191545,"samples":4}]}-->
