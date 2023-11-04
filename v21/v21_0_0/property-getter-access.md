## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,193,738|97|
|Getter|56,719,857|94|
|Method|710,478,493|97|
|DefineProperty (getter)|710,687,889|95|
|DefineProperty (getter & enumerable=false)|56,674,645|97|
|DefineProperty (getter & configurable=false)|712,352,200|95|
|DefineProperty (getter & enumerable=false & configurable=false)|56,981,767|99|
|DefineProperty (writable)|712,658,451|93|
|DefineProperty (writable & enumerable=false)|712,235,472|94|
|DefineProperty (writable & enumerable=false & configurable=false)|318,167,195|47|
|DefineProperties (getter)|37,129,858|93|
|DefineProperties (getter & enumerable=false)|37,172,042|95|
|DefineProperties (getter & enumerable=false & configurable=false)|56,969,582|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:35:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710193738.3813092,"samples":7},{"name":"Getter","opsSec":56719857.33674735,"samples":7},{"name":"Method","opsSec":710478492.6038377,"samples":7},{"name":"DefineProperty (getter)","opsSec":710687888.7548915,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56674645.43135256,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":712352199.631936,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56981766.6244992,"samples":5},{"name":"DefineProperty (writable)","opsSec":712658450.7900271,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":712235471.7325711,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":318167194.8145236,"samples":6},{"name":"DefineProperties (getter)","opsSec":37129858.060331754,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":37172041.716963224,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56969581.505066685,"samples":5}]}-->
