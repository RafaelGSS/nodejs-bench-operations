## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|854,196,076|96|
|Getter|95,030,755|98|
|Method|854,771,988|100|
|DefineProperty (getter)|854,593,544|99|
|DefineProperty (getter & enumerable=false)|94,873,260|97|
|DefineProperty (getter & configurable=false)|855,328,379|97|
|DefineProperty (getter & enumerable=false & configurable=false)|94,662,920|95|
|DefineProperty (writable)|856,349,794|100|
|DefineProperty (writable & enumerable=false)|509,249,354|63|
|DefineProperty (writable & enumerable=false & configurable=false)|125,903,722|80|
|DefineProperties (getter)|57,995,047|91|
|DefineProperties (getter & enumerable=false)|95,035,951|97|
|DefineProperties (getter & enumerable=false & configurable=false)|95,165,621|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:06:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":854196075.9718174,"samples":6},{"name":"Getter","opsSec":95030754.52429846,"samples":6},{"name":"Method","opsSec":854771988.0531981,"samples":6},{"name":"DefineProperty (getter)","opsSec":854593543.7707536,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":94873260.32613009,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":855328379.4140158,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94662919.97270286,"samples":5},{"name":"DefineProperty (writable)","opsSec":856349793.9158887,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":509249353.5912852,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":125903721.77435376,"samples":4},{"name":"DefineProperties (getter)","opsSec":57995046.59210456,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95035951.45161514,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":95165620.75923786,"samples":7}]}-->
