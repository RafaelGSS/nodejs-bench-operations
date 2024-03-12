## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|819,089,352|99|
|Getter|90,017,131|97|
|Method|818,057,914|100|
|DefineProperty (getter)|818,273,532|91|
|DefineProperty (getter & enumerable=false)|90,997,108|99|
|DefineProperty (getter & configurable=false)|819,173,740|99|
|DefineProperty (getter & enumerable=false & configurable=false)|91,602,749|97|
|DefineProperty (writable)|819,129,109|96|
|DefineProperty (writable & enumerable=false)|818,993,981|96|
|DefineProperty (writable & enumerable=false & configurable=false)|811,689,758|94|
|DefineProperties (getter)|91,519,471|96|
|DefineProperties (getter & enumerable=false)|86,247,065|91|
|DefineProperties (getter & enumerable=false & configurable=false)|58,962,559|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":819089351.60384,"samples":6},{"name":"Getter","opsSec":90017131.35352033,"samples":6},{"name":"Method","opsSec":818057913.8369898,"samples":7},{"name":"DefineProperty (getter)","opsSec":818273532.3308247,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":90997107.87119436,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":819173739.9034265,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91602749.01926377,"samples":6},{"name":"DefineProperty (writable)","opsSec":819129108.8094292,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":818993980.7997813,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":811689758.3456777,"samples":8},{"name":"DefineProperties (getter)","opsSec":91519471.02141155,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":86247064.63258393,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":58962558.665282026,"samples":5}]}-->
