## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|148,170,961|74162605|
|Setter|11,004,303|5502156|
|Method|99,764,764|49896392|
|DefineProperty (setter)|104,142,170|52071102|
|DefineProperty (setter & enumerable=false)|11,154,278|5577142|
|DefineProperty (setter & configurable=false)|10,962,816|5481410|
|DefineProperty (setter & enumerable=false & configurable=false)|11,178,347|5589244|
|DefineProperty (writable)|104,139,711|52074781|
|DefineProperty (writable & enumerable=false)|104,726,958|52363645|
|DefineProperty (writable & enumerable=false & configurable=false)|104,881,250|52444587|
|DefineProperties (setter)|93,612,883|46809438|
|DefineProperties (setter & enumerable=false)|11,148,217|5574146|
|DefineProperties (setter & enumerable=false & configurable=false)|11,116,160|5558083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":148170961.3621447,"samples":74162605},{"name":"Setter","opsSec":11004303.812797964,"samples":5502156},{"name":"Method","opsSec":99764764.06836377,"samples":49896392},{"name":"DefineProperty (setter)","opsSec":104142170.25793684,"samples":52071102},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11154278.86903172,"samples":5577142},{"name":"DefineProperty (setter & configurable=false)","opsSec":10962816.075311843,"samples":5481410},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11178347.599954143,"samples":5589244},{"name":"DefineProperty (writable)","opsSec":104139711.42469634,"samples":52074781},{"name":"DefineProperty (writable & enumerable=false)","opsSec":104726958.8533561,"samples":52363645},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":104881250.85078573,"samples":52444587},{"name":"DefineProperties (setter)","opsSec":93612883.65209167,"samples":46809438},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11148217.41842547,"samples":5574146},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11116160.931030616,"samples":5558083}]}-->
