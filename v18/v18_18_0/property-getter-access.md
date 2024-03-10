## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|818,693,075|98|
|Getter|91,744,587|96|
|Method|819,903,067|93|
|DefineProperty (getter)|820,541,338|99|
|DefineProperty (getter & enumerable=false)|91,450,026|95|
|DefineProperty (getter & configurable=false)|821,658,612|100|
|DefineProperty (getter & enumerable=false & configurable=false)|91,758,822|98|
|DefineProperty (writable)|821,127,152|96|
|DefineProperty (writable & enumerable=false)|818,657,836|89|
|DefineProperty (writable & enumerable=false & configurable=false)|568,066,117|70|
|DefineProperties (getter)|58,660,796|90|
|DefineProperties (getter & enumerable=false)|91,620,181|97|
|DefineProperties (getter & enumerable=false & configurable=false)|91,681,064|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":818693074.9767072,"samples":6},{"name":"Getter","opsSec":91744587.15475492,"samples":5},{"name":"Method","opsSec":819903067.429681,"samples":8},{"name":"DefineProperty (getter)","opsSec":820541338.0966654,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91450025.55723834,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":821658611.5083951,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":91758821.64653502,"samples":7},{"name":"DefineProperty (writable)","opsSec":821127152.2654372,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":818657836.245686,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":568066117.4947023,"samples":11},{"name":"DefineProperties (getter)","opsSec":58660795.761243545,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91620180.70120479,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":91681064.22256383,"samples":6}]}-->
