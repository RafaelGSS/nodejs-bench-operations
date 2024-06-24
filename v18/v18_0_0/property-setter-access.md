## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|20,351,173|10175587|
|Setter|6,116,768|3058385|
|Method|20,727,785|10363893|
|DefineProperty (setter)|20,796,506|10398254|
|DefineProperty (setter & enumerable=false)|6,196,711|3098356|
|DefineProperty (setter & configurable=false)|6,225,923|3112962|
|DefineProperty (setter & enumerable=false & configurable=false)|6,352,321|3176161|
|DefineProperty (writable)|20,173,050|10086526|
|DefineProperty (writable & enumerable=false)|20,125,349|10062675|
|DefineProperty (writable & enumerable=false & configurable=false)|20,155,590|10077796|
|DefineProperties (setter)|20,792,080|10396041|
|DefineProperties (setter & enumerable=false)|6,173,093|3086547|
|DefineProperties (setter & enumerable=false & configurable=false)|6,118,847|3059424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":20351173.199782934,"samples":10175587},{"name":"Setter","opsSec":6116768.184649009,"samples":3058385},{"name":"Method","opsSec":20727785.132273775,"samples":10363893},{"name":"DefineProperty (setter)","opsSec":20796506.826089986,"samples":10398254},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6196711.655359213,"samples":3098356},{"name":"DefineProperty (setter & configurable=false)","opsSec":6225923.440552669,"samples":3112962},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6352321.238082443,"samples":3176161},{"name":"DefineProperty (writable)","opsSec":20173050.919298653,"samples":10086526},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20125349.183284152,"samples":10062675},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20155590.76758535,"samples":10077796},{"name":"DefineProperties (setter)","opsSec":20792080.13426573,"samples":10396041},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6173093.3473000005,"samples":3086547},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6118847.006548117,"samples":3059424}]}-->
