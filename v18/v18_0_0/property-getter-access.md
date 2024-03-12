## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|820,425,082|96|
|Getter|91,202,826|91|
|Method|821,173,251|90|
|DefineProperty (getter)|819,977,185|94|
|DefineProperty (getter & enumerable=false)|91,757,884|98|
|DefineProperty (getter & configurable=false)|821,446,848|99|
|DefineProperty (getter & enumerable=false & configurable=false)|91,856,716|100|
|DefineProperty (writable)|591,749,791|71|
|DefineProperty (writable & enumerable=false)|135,339,108|84|
|DefineProperty (writable & enumerable=false & configurable=false)|131,837,269|84|
|DefineProperties (getter)|57,510,796|91|
|DefineProperties (getter & enumerable=false)|91,994,537|98|
|DefineProperties (getter & enumerable=false & configurable=false)|90,661,244|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":820425082.004631,"samples":6},{"name":"Getter","opsSec":91202826.31495252,"samples":7},{"name":"Method","opsSec":821173251.1287384,"samples":6},{"name":"DefineProperty (getter)","opsSec":819977184.9303006,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91757884.22530389,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":821446848.0161554,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91856715.55010831,"samples":8},{"name":"DefineProperty (writable)","opsSec":591749791.199858,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":135339108.07958296,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":131837269.37105508,"samples":6},{"name":"DefineProperties (getter)","opsSec":57510795.559244126,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91994537.25646529,"samples":9},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":90661243.74302937,"samples":6}]}-->
