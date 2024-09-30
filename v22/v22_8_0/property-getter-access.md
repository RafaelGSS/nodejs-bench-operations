## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|134,425,528|67221536|
|Getter|47,928,637|23964329|
|Method|87,918,353|43965558|
|DefineProperty (getter)|87,629,030|43814538|
|DefineProperty (getter & enumerable=false)|48,044,683|24032101|
|DefineProperty (getter & configurable=false)|81,236,585|40623212|
|DefineProperty (getter & enumerable=false & configurable=false)|49,330,126|24667697|
|DefineProperty (writable)|88,862,791|44567654|
|DefineProperty (writable & enumerable=false)|88,942,500|44473792|
|DefineProperty (writable & enumerable=false & configurable=false)|89,040,173|44520089|
|DefineProperties (getter)|47,695,762|23847910|
|DefineProperties (getter & enumerable=false)|47,776,971|23889887|
|DefineProperties (getter & enumerable=false & configurable=false)|49,181,929|24592116|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":134425528.66195643,"samples":67221536},{"name":"Getter","opsSec":47928637.965829335,"samples":23964329},{"name":"Method","opsSec":87918353.42014411,"samples":43965558},{"name":"DefineProperty (getter)","opsSec":87629030.9586781,"samples":43814538},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48044683.84718708,"samples":24032101},{"name":"DefineProperty (getter & configurable=false)","opsSec":81236585.9244982,"samples":40623212},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49330126.52908922,"samples":24667697},{"name":"DefineProperty (writable)","opsSec":88862791.94277234,"samples":44567654},{"name":"DefineProperty (writable & enumerable=false)","opsSec":88942500.22457217,"samples":44473792},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89040173.36991097,"samples":44520089},{"name":"DefineProperties (getter)","opsSec":47695762.09734481,"samples":23847910},{"name":"DefineProperties (getter & enumerable=false)","opsSec":47776971.49840585,"samples":23889887},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49181929.59714784,"samples":24592116}]}-->
