## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|769,459,679|96|
|Setter|9,024,446|96|
|Method|689,303,857|86|
|DefineProperty (setter)|776,994,717|98|
|DefineProperty (setter & enumerable=false)|8,976,112|97|
|DefineProperty (setter & configurable=false)|8,653,663|98|
|DefineProperty (setter & enumerable=false & configurable=false)|9,014,554|97|
|DefineProperty (writable)|658,839,735|70|
|DefineProperty (writable & enumerable=false)|115,808,653|85|
|DefineProperty (writable & enumerable=false & configurable=false)|117,184,412|89|
|DefineProperties (setter)|85,681,213|86|
|DefineProperties (setter & enumerable=false)|8,678,895|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,860,657|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":769459678.5401291,"samples":6},{"name":"Setter","opsSec":9024446.315770188,"samples":6},{"name":"Method","opsSec":689303856.5486939,"samples":5},{"name":"DefineProperty (setter)","opsSec":776994716.6634121,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8976111.839795904,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8653663.075518038,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9014554.11943455,"samples":6},{"name":"DefineProperty (writable)","opsSec":658839735.133146,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":115808653.1083763,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":117184412.18636347,"samples":6},{"name":"DefineProperties (setter)","opsSec":85681213.33649954,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8678894.590890443,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8860656.814375669,"samples":8}]}-->
