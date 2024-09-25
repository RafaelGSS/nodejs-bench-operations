## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|20,620,851|10310426|
|Getter|16,030,715|8015358|
|Method|20,224,925|10112464|
|DefineProperty (getter)|20,350,410|10175206|
|DefineProperty (getter & enumerable=false)|16,325,312|8162657|
|DefineProperty (getter & configurable=false)|20,173,100|10086551|
|DefineProperty (getter & enumerable=false & configurable=false)|16,568,890|8284446|
|DefineProperty (writable)|20,192,273|10096137|
|DefineProperty (writable & enumerable=false)|20,199,397|10099700|
|DefineProperty (writable & enumerable=false & configurable=false)|20,535,414|10267708|
|DefineProperties (getter)|16,412,837|8206419|
|DefineProperties (getter & enumerable=false)|15,901,808|7950905|
|DefineProperties (getter & enumerable=false & configurable=false)|16,384,345|8192173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":20620851.29894543,"samples":10310426},{"name":"Getter","opsSec":16030715.614698397,"samples":8015358},{"name":"Method","opsSec":20224925.735444147,"samples":10112464},{"name":"DefineProperty (getter)","opsSec":20350410.901328858,"samples":10175206},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16325312.69514621,"samples":8162657},{"name":"DefineProperty (getter & configurable=false)","opsSec":20173100.62817703,"samples":10086551},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16568890.742326263,"samples":8284446},{"name":"DefineProperty (writable)","opsSec":20192273.193514116,"samples":10096137},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20199397.93960927,"samples":10099700},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20535414.521729957,"samples":10267708},{"name":"DefineProperties (getter)","opsSec":16412837.671537258,"samples":8206419},{"name":"DefineProperties (getter & enumerable=false)","opsSec":15901808.855800603,"samples":7950905},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16384345.343577854,"samples":8192173}]}-->
