## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|707,127,635|95|
|Getter|50,799,072|93|
|Method|707,144,984|98|
|DefineProperty (getter)|706,693,174|97|
|DefineProperty (getter & enumerable=false)|50,657,528|96|
|DefineProperty (getter & configurable=false)|707,937,083|97|
|DefineProperty (getter & enumerable=false & configurable=false)|50,154,032|94|
|DefineProperty (writable)|707,236,014|98|
|DefineProperty (writable & enumerable=false)|217,913,922|32|
|DefineProperty (writable & enumerable=false & configurable=false)|72,281,663|84|
|DefineProperties (getter)|33,663,341|89|
|DefineProperties (getter & enumerable=false)|33,462,528|91|
|DefineProperties (getter & enumerable=false & configurable=false)|50,616,621|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":707127635.2954327,"samples":6},{"name":"Getter","opsSec":50799072.14719254,"samples":5},{"name":"Method","opsSec":707144983.5848236,"samples":6},{"name":"DefineProperty (getter)","opsSec":706693174.0195552,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50657527.77917076,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":707937083.1411144,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50154031.630216554,"samples":5},{"name":"DefineProperty (writable)","opsSec":707236014.0235801,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":217913921.86767563,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":72281662.71555169,"samples":4},{"name":"DefineProperties (getter)","opsSec":33663341.292395994,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":33462528.4042638,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50616621.0265901,"samples":5}]}-->
