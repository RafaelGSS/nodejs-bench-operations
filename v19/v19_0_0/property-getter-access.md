## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|680,704,754|87|
|Getter|47,803,833|85|
|Method|663,982,287|84|
|DefineProperty (getter)|664,707,579|81|
|DefineProperty (getter & enumerable=false)|47,490,549|82|
|DefineProperty (getter & configurable=false)|669,634,270|87|
|DefineProperty (getter & enumerable=false & configurable=false)|48,379,535|86|
|DefineProperty (writable)|670,794,260|90|
|DefineProperty (writable & enumerable=false)|678,329,519|87|
|DefineProperty (writable & enumerable=false & configurable=false)|664,833,459|87|
|DefineProperties (getter)|47,666,817|85|
|DefineProperties (getter & enumerable=false)|50,289,604|87|
|DefineProperties (getter & enumerable=false & configurable=false)|50,643,587|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Getter (class)","opsSec":680704753.8450464,"samples":6},{"name":"Getter","opsSec":47803833.30390369,"samples":5},{"name":"Method","opsSec":663982287.2404923,"samples":6},{"name":"DefineProperty (getter)","opsSec":664707578.7600154,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47490549.46520128,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":669634270.3130212,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48379534.89022427,"samples":5},{"name":"DefineProperty (writable)","opsSec":670794260.2700287,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":678329518.573252,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":664833458.9586533,"samples":7},{"name":"DefineProperties (getter)","opsSec":47666817.13023342,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50289604.46196559,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50643586.9984165,"samples":7}]}-->
