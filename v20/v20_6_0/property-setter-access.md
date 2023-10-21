## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,086,496|96|
|Setter|9,044,334|98|
|Method|587,090,126|96|
|DefineProperty (setter)|587,684,848|93|
|DefineProperty (setter & enumerable=false)|9,147,762|91|
|DefineProperty (setter & configurable=false)|9,151,494|99|
|DefineProperty (setter & enumerable=false & configurable=false)|9,166,941|97|
|DefineProperty (writable)|591,056,501|99|
|DefineProperty (writable & enumerable=false)|590,313,451|96|
|DefineProperty (writable & enumerable=false & configurable=false)|590,439,222|100|
|DefineProperties (setter)|591,982,185|98|
|DefineProperties (setter & enumerable=false)|9,250,789|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,564,473|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":587086496.096732,"samples":7},{"name":"Setter","opsSec":9044333.527708754,"samples":6},{"name":"Method","opsSec":587090125.9527116,"samples":7},{"name":"DefineProperty (setter)","opsSec":587684847.5056599,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9147761.593544949,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9151493.770952646,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9166941.388646396,"samples":6},{"name":"DefineProperty (writable)","opsSec":591056501.0212436,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590313450.7212458,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":590439222.2714646,"samples":6},{"name":"DefineProperties (setter)","opsSec":591982185.477544,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9250789.125626393,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8564473.466562102,"samples":5}]}-->
