## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,355,185|88|
|Getter|46,788,213|88|
|Method|598,021,200|90|
|DefineProperty (getter)|602,062,995|88|
|DefineProperty (getter & enumerable=false)|47,521,007|87|
|DefineProperty (getter & configurable=false)|595,931,760|90|
|DefineProperty (getter & enumerable=false & configurable=false)|48,524,310|86|
|DefineProperty (writable)|596,854,672|89|
|DefineProperty (writable & enumerable=false)|138,081,423|22|
|DefineProperty (writable & enumerable=false & configurable=false)|74,219,188|81|
|DefineProperties (getter)|30,724,983|84|
|DefineProperties (getter & enumerable=false)|30,061,715|84|
|DefineProperties (getter & enumerable=false & configurable=false)|47,593,380|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597355184.5034064,"samples":7},{"name":"Getter","opsSec":46788213.466746,"samples":5},{"name":"Method","opsSec":598021200.0679028,"samples":6},{"name":"DefineProperty (getter)","opsSec":602062994.6004039,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47521006.70719235,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":595931759.501273,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48524309.67562897,"samples":8},{"name":"DefineProperty (writable)","opsSec":596854671.9080957,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":138081423.22967803,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":74219188.08135727,"samples":7},{"name":"DefineProperties (getter)","opsSec":30724982.80748173,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":30061715.04541202,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":47593379.67963806,"samples":7}]}-->
