## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|132,589,648|88|
|Setter|12,339,500|94|
|Method|126,631,176|79|
|DefineProperty (setter)|123,597,851|79|
|DefineProperty (setter & enumerable=false)|12,336,751|93|
|DefineProperty (setter & configurable=false)|12,297,721|97|
|DefineProperty (setter & enumerable=false & configurable=false)|12,435,012|95|
|DefineProperty (writable)|131,211,837|86|
|DefineProperty (writable & enumerable=false)|129,843,153|83|
|DefineProperty (writable & enumerable=false & configurable=false)|129,061,942|85|
|DefineProperties (setter)|127,133,415|80|
|DefineProperties (setter & enumerable=false)|12,187,440|96|
|DefineProperties (setter & enumerable=false & configurable=false)|12,297,786|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:10:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":132589648.36275452,"samples":5},{"name":"Setter","opsSec":12339500.066831933,"samples":4},{"name":"Method","opsSec":126631175.9200343,"samples":6},{"name":"DefineProperty (setter)","opsSec":123597850.6224885,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12336750.972689776,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":12297721.097593183,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12435012.472348277,"samples":5},{"name":"DefineProperty (writable)","opsSec":131211837.04384358,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":129843152.68347917,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":129061941.82836248,"samples":7},{"name":"DefineProperties (setter)","opsSec":127133415.4838308,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12187439.631249707,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12297785.909044953,"samples":7}]}-->
