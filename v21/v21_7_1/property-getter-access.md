## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|821,037,663|97|
|Getter|92,513,146|99|
|Method|823,086,970|97|
|DefineProperty (getter)|823,237,905|97|
|DefineProperty (getter & enumerable=false)|91,876,533|97|
|DefineProperty (getter & configurable=false)|823,996,700|98|
|DefineProperty (getter & enumerable=false & configurable=false)|92,557,269|97|
|DefineProperty (writable)|824,331,520|97|
|DefineProperty (writable & enumerable=false)|823,797,422|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,860,552|99|
|DefineProperties (getter)|92,483,665|97|
|DefineProperties (getter & enumerable=false)|92,415,931|98|
|DefineProperties (getter & enumerable=false & configurable=false)|61,063,960|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":821037663.4944291,"samples":6},{"name":"Getter","opsSec":92513146.1444005,"samples":6},{"name":"Method","opsSec":823086969.8301795,"samples":6},{"name":"DefineProperty (getter)","opsSec":823237905.4346099,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91876533.11164825,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":823996700.281731,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92557268.98736267,"samples":6},{"name":"DefineProperty (writable)","opsSec":824331519.6929677,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823797422.1336697,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823860551.6141144,"samples":10},{"name":"DefineProperties (getter)","opsSec":92483665.20693585,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":92415930.82338217,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61063960.20547375,"samples":6}]}-->
