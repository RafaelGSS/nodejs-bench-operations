## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|852,623,855|96|
|Getter|95,083,405|97|
|Method|853,109,714|99|
|DefineProperty (getter)|853,315,778|98|
|DefineProperty (getter & enumerable=false)|95,195,019|99|
|DefineProperty (getter & configurable=false)|855,517,827|100|
|DefineProperty (getter & enumerable=false & configurable=false)|95,280,246|94|
|DefineProperty (writable)|855,435,724|100|
|DefineProperty (writable & enumerable=false)|856,014,168|99|
|DefineProperty (writable & enumerable=false & configurable=false)|855,459,946|99|
|DefineProperties (getter)|94,807,837|94|
|DefineProperties (getter & enumerable=false)|95,461,288|96|
|DefineProperties (getter & enumerable=false & configurable=false)|65,228,093|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:02:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":852623854.735423,"samples":6},{"name":"Getter","opsSec":95083404.82965504,"samples":5},{"name":"Method","opsSec":853109714.4113309,"samples":6},{"name":"DefineProperty (getter)","opsSec":853315777.5674076,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":95195019.3544878,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":855517827.3374816,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":95280245.87546937,"samples":6},{"name":"DefineProperty (writable)","opsSec":855435723.7673348,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":856014168.0679314,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":855459945.8472077,"samples":7},{"name":"DefineProperties (getter)","opsSec":94807836.53560084,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95461287.53391291,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":65228092.55222711,"samples":6}]}-->
