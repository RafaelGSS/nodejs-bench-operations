## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|712,216,150|97|
|Getter|52,564,856|93|
|Method|708,360,023|96|
|DefineProperty (getter)|714,084,465|95|
|DefineProperty (getter & enumerable=false)|52,629,054|94|
|DefineProperty (getter & configurable=false)|714,634,159|96|
|DefineProperty (getter & enumerable=false & configurable=false)|52,614,972|97|
|DefineProperty (writable)|714,495,907|96|
|DefineProperty (writable & enumerable=false)|715,081,545|99|
|DefineProperty (writable & enumerable=false & configurable=false)|714,718,511|93|
|DefineProperties (getter)|52,840,073|97|
|DefineProperties (getter & enumerable=false)|52,595,657|95|
|DefineProperties (getter & enumerable=false & configurable=false)|52,702,451|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":712216150.1849929,"samples":8},{"name":"Getter","opsSec":52564855.89829662,"samples":6},{"name":"Method","opsSec":708360023.4652878,"samples":7},{"name":"DefineProperty (getter)","opsSec":714084465.1485329,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52629054.440268345,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":714634159.0693209,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52614972.03345306,"samples":5},{"name":"DefineProperty (writable)","opsSec":714495906.7944237,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":715081545.0773125,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":714718510.9691728,"samples":6},{"name":"DefineProperties (getter)","opsSec":52840073.16234073,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52595657.47130039,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52702450.67488853,"samples":6}]}-->
