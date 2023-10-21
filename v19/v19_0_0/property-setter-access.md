## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|580,735,053|96|
|Setter|8,416,421|91|
|Method|588,270,260|99|
|DefineProperty (setter)|588,408,909|100|
|DefineProperty (setter & enumerable=false)|8,396,177|95|
|DefineProperty (setter & configurable=false)|8,570,114|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,463,152|97|
|DefineProperty (writable)|595,184,473|93|
|DefineProperty (writable & enumerable=false)|226,697,055|38|
|DefineProperty (writable & enumerable=false & configurable=false)|118,696,694|82|
|DefineProperties (setter)|91,043,464|88|
|DefineProperties (setter & enumerable=false)|8,365,776|95|
|DefineProperties (setter & enumerable=false & configurable=false)|8,118,159|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":580735052.9273584,"samples":6},{"name":"Setter","opsSec":8416421.409427114,"samples":8},{"name":"Method","opsSec":588270259.5383509,"samples":7},{"name":"DefineProperty (setter)","opsSec":588408908.7635207,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8396176.879917176,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8570114.483740874,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8463151.79679206,"samples":5},{"name":"DefineProperty (writable)","opsSec":595184472.822082,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":226697054.893903,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":118696693.71987097,"samples":4},{"name":"DefineProperties (setter)","opsSec":91043463.83954406,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8365775.867978324,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8118159.243857245,"samples":4}]}-->
