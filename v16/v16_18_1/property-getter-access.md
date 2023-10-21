## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|592,046,644|98|
|Getter|67,623,282|96|
|Method|592,698,008|93|
|DefineProperty (getter)|591,791,606|95|
|DefineProperty (getter & enumerable=false)|67,617,390|93|
|DefineProperty (getter & configurable=false)|593,359,786|98|
|DefineProperty (getter & enumerable=false & configurable=false)|67,988,590|96|
|DefineProperty (writable)|593,016,288|95|
|DefineProperty (writable & enumerable=false)|593,218,006|97|
|DefineProperty (writable & enumerable=false & configurable=false)|263,017,661|45|
|DefineProperties (getter)|41,079,609|91|
|DefineProperties (getter & enumerable=false)|67,212,028|95|
|DefineProperties (getter & enumerable=false & configurable=false)|67,419,699|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":592046643.9627706,"samples":8},{"name":"Getter","opsSec":67623281.64357294,"samples":6},{"name":"Method","opsSec":592698008.1006417,"samples":7},{"name":"DefineProperty (getter)","opsSec":591791605.7389903,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":67617390.42091495,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":593359786.3142158,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":67988590.03277133,"samples":7},{"name":"DefineProperty (writable)","opsSec":593016288.2946206,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593218006.2002131,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":263017661.2972358,"samples":9},{"name":"DefineProperties (getter)","opsSec":41079609.49882485,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":67212028.34263796,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67419698.5906192,"samples":8}]}-->
