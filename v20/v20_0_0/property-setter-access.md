## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|752,110,885|86|
|Setter|11,739,024|90|
|Method|786,410,993|99|
|DefineProperty (setter)|788,709,219|98|
|DefineProperty (setter & enumerable=false)|11,072,694|93|
|DefineProperty (setter & configurable=false)|11,823,341|93|
|DefineProperty (setter & enumerable=false & configurable=false)|11,828,609|95|
|DefineProperty (writable)|789,216,249|99|
|DefineProperty (writable & enumerable=false)|788,588,642|96|
|DefineProperty (writable & enumerable=false & configurable=false)|614,549,752|79|
|DefineProperties (setter)|116,590,745|88|
|DefineProperties (setter & enumerable=false)|10,673,926|93|
|DefineProperties (setter & enumerable=false & configurable=false)|10,965,303|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":752110885.0745436,"samples":5},{"name":"Setter","opsSec":11739023.565749062,"samples":5},{"name":"Method","opsSec":786410993.4447494,"samples":9},{"name":"DefineProperty (setter)","opsSec":788709218.9194579,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11072694.413536156,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11823341.293780774,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11828608.920866158,"samples":7},{"name":"DefineProperty (writable)","opsSec":789216249.0999235,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":788588641.5862683,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":614549751.718216,"samples":7},{"name":"DefineProperties (setter)","opsSec":116590745.18369545,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10673925.636942951,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10965303.04586169,"samples":4}]}-->
