## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|822,232,243|95|
|Getter|92,052,979|97|
|Method|819,362,955|98|
|DefineProperty (getter)|822,265,338|97|
|DefineProperty (getter & enumerable=false)|91,844,713|98|
|DefineProperty (getter & configurable=false)|822,971,405|94|
|DefineProperty (getter & enumerable=false & configurable=false)|92,514,760|97|
|DefineProperty (writable)|824,515,855|97|
|DefineProperty (writable & enumerable=false)|824,153,487|99|
|DefineProperty (writable & enumerable=false & configurable=false)|824,448,166|98|
|DefineProperties (getter)|92,517,037|96|
|DefineProperties (getter & enumerable=false)|68,070,568|74|
|DefineProperties (getter & enumerable=false & configurable=false)|56,919,198|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Getter (class)","opsSec":822232243.1883911,"samples":6},{"name":"Getter","opsSec":92052979.4617706,"samples":7},{"name":"Method","opsSec":819362955.1747456,"samples":6},{"name":"DefineProperty (getter)","opsSec":822265337.8962309,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91844712.72876312,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":822971404.920675,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92514760.40419936,"samples":6},{"name":"DefineProperty (writable)","opsSec":824515855.4565619,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824153486.8248069,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":824448166.428762,"samples":7},{"name":"DefineProperties (getter)","opsSec":92517037.48628365,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68070567.66480796,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56919197.68832083,"samples":5}]}-->
