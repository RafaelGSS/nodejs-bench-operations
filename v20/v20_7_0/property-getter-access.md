## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|595,211,980|91|
|Getter|67,941,251|94|
|Method|591,422,823|92|
|DefineProperty (getter)|597,271,387|99|
|DefineProperty (getter & enumerable=false)|68,750,066|94|
|DefineProperty (getter & configurable=false)|597,245,991|99|
|DefineProperty (getter & enumerable=false & configurable=false)|68,525,449|95|
|DefineProperty (writable)|599,068,982|99|
|DefineProperty (writable & enumerable=false)|597,257,205|95|
|DefineProperty (writable & enumerable=false & configurable=false)|599,623,789|99|
|DefineProperties (getter)|68,456,711|93|
|DefineProperties (getter & enumerable=false)|68,382,229|96|
|DefineProperties (getter & enumerable=false & configurable=false)|50,228,754|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":595211980.0539547,"samples":6},{"name":"Getter","opsSec":67941250.83000727,"samples":5},{"name":"Method","opsSec":591422822.6521295,"samples":5},{"name":"DefineProperty (getter)","opsSec":597271386.7437193,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68750066.31776163,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":597245990.9416922,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":68525449.13378866,"samples":5},{"name":"DefineProperty (writable)","opsSec":599068981.768851,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597257205.1820956,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":599623789.0053993,"samples":7},{"name":"DefineProperties (getter)","opsSec":68456711.34567119,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68382229.37071343,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50228753.64049043,"samples":7}]}-->
