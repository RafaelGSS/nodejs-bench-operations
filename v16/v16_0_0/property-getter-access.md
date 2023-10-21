## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,206,112|97|
|Getter|67,939,834|96|
|Method|597,957,821|100|
|DefineProperty (getter)|596,856,600|95|
|DefineProperty (getter & enumerable=false)|69,287,865|94|
|DefineProperty (getter & configurable=false)|598,424,305|98|
|DefineProperty (getter & enumerable=false & configurable=false)|69,239,969|93|
|DefineProperty (writable)|368,788,511|63|
|DefineProperty (writable & enumerable=false)|92,852,863|75|
|DefineProperty (writable & enumerable=false & configurable=false)|91,103,143|76|
|DefineProperties (getter)|38,973,002|87|
|DefineProperties (getter & enumerable=false)|69,414,299|93|
|DefineProperties (getter & enumerable=false & configurable=false)|69,337,353|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597206111.7411176,"samples":9},{"name":"Getter","opsSec":67939833.71228674,"samples":5},{"name":"Method","opsSec":597957821.4628714,"samples":9},{"name":"DefineProperty (getter)","opsSec":596856600.1136036,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69287865.23050658,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":598424304.5634677,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69239968.51070358,"samples":5},{"name":"DefineProperty (writable)","opsSec":368788511.44283724,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92852863.4893125,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91103143.07506667,"samples":5},{"name":"DefineProperties (getter)","opsSec":38973001.71502672,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69414299.16218184,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69337352.84227608,"samples":8}]}-->
