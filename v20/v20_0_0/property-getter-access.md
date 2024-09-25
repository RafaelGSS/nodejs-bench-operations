## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,997,393|6998697|
|Getter|11,822,678|5911342|
|Method|14,085,617|7042809|
|DefineProperty (getter)|13,842,220|6921111|
|DefineProperty (getter & enumerable=false)|11,897,242|5948622|
|DefineProperty (getter & configurable=false)|13,919,810|6959906|
|DefineProperty (getter & enumerable=false & configurable=false)|11,926,482|5963242|
|DefineProperty (writable)|13,844,495|6922248|
|DefineProperty (writable & enumerable=false)|13,906,842|6953422|
|DefineProperty (writable & enumerable=false & configurable=false)|13,799,916|6899959|
|DefineProperties (getter)|12,084,174|6042088|
|DefineProperties (getter & enumerable=false)|12,124,477|6062239|
|DefineProperties (getter & enumerable=false & configurable=false)|11,823,968|5911985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":13997393.01916473,"samples":6998697},{"name":"Getter","opsSec":11822678.669134242,"samples":5911342},{"name":"Method","opsSec":14085617.034234205,"samples":7042809},{"name":"DefineProperty (getter)","opsSec":13842220.93881729,"samples":6921111},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11897242.905323436,"samples":5948622},{"name":"DefineProperty (getter & configurable=false)","opsSec":13919810.147779334,"samples":6959906},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":11926482.494324964,"samples":5963242},{"name":"DefineProperty (writable)","opsSec":13844495.545368448,"samples":6922248},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13906842.43801819,"samples":6953422},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13799916.279710865,"samples":6899959},{"name":"DefineProperties (getter)","opsSec":12084174.159342583,"samples":6042088},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12124477.794263408,"samples":6062239},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11823968.310549913,"samples":5911985}]}-->
