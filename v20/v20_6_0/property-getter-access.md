## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|719,079,312|96|
|Getter|53,888,444|95|
|Method|717,347,886|92|
|DefineProperty (getter)|716,975,847|94|
|DefineProperty (getter & enumerable=false)|53,872,197|98|
|DefineProperty (getter & configurable=false)|718,454,918|95|
|DefineProperty (getter & enumerable=false & configurable=false)|53,025,353|96|
|DefineProperty (writable)|719,778,227|96|
|DefineProperty (writable & enumerable=false)|341,876,606|49|
|DefineProperty (writable & enumerable=false & configurable=false)|74,470,686|84|
|DefineProperties (getter)|31,868,986|91|
|DefineProperties (getter & enumerable=false)|54,084,739|95|
|DefineProperties (getter & enumerable=false & configurable=false)|53,664,694|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":719079311.649793,"samples":6},{"name":"Getter","opsSec":53888444.23038351,"samples":7},{"name":"Method","opsSec":717347885.718248,"samples":6},{"name":"DefineProperty (getter)","opsSec":716975847.0793816,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53872197.26636611,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":718454918.1208923,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53025353.274036065,"samples":7},{"name":"DefineProperty (writable)","opsSec":719778226.5643597,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":341876606.3201052,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":74470685.70312315,"samples":5},{"name":"DefineProperties (getter)","opsSec":31868986.165078115,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":54084738.61753091,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53664694.1343155,"samples":9}]}-->
