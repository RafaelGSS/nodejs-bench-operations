## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,697,708|97|
|Getter|101,992,243|99|
|Method|911,971,279|92|
|DefineProperty (getter)|910,509,360|97|
|DefineProperty (getter & enumerable=false)|102,218,998|92|
|DefineProperty (getter & configurable=false)|913,181,441|96|
|DefineProperty (getter & enumerable=false & configurable=false)|102,044,415|100|
|DefineProperty (writable)|911,158,509|100|
|DefineProperty (writable & enumerable=false)|910,915,038|100|
|DefineProperty (writable & enumerable=false & configurable=false)|911,486,172|94|
|DefineProperties (getter)|92,184,184|91|
|DefineProperties (getter & enumerable=false)|64,804,711|93|
|DefineProperties (getter & enumerable=false & configurable=false)|64,294,318|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:39:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910697708.0506945,"samples":6},{"name":"Getter","opsSec":101992243.4612984,"samples":6},{"name":"Method","opsSec":911971279.4630839,"samples":6},{"name":"DefineProperty (getter)","opsSec":910509360.1468964,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102218998.18375078,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":913181441.3172257,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102044415.30891196,"samples":8},{"name":"DefineProperty (writable)","opsSec":911158509.3647696,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":910915038.190583,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":911486172.4397739,"samples":7},{"name":"DefineProperties (getter)","opsSec":92184183.65802032,"samples":8},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64804710.60995935,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64294317.54205714,"samples":5}]}-->
