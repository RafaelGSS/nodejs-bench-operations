## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|163,446,345|81724035|
|Getter|54,854,910|27427529|
|Method|106,274,620|53162906|
|DefineProperty (getter)|106,426,680|53213357|
|DefineProperty (getter & enumerable=false)|53,145,153|26572585|
|DefineProperty (getter & configurable=false)|107,328,171|53664099|
|DefineProperty (getter & enumerable=false & configurable=false)|55,857,602|27929575|
|DefineProperty (writable)|106,457,638|53228831|
|DefineProperty (writable & enumerable=false)|107,303,099|53651565|
|DefineProperty (writable & enumerable=false & configurable=false)|107,227,621|53613816|
|DefineProperties (getter)|55,555,815|27858283|
|DefineProperties (getter & enumerable=false)|55,936,534|27968832|
|DefineProperties (getter & enumerable=false & configurable=false)|55,858,113|27929070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":163446345.64105347,"samples":81724035},{"name":"Getter","opsSec":54854910.879129015,"samples":27427529},{"name":"Method","opsSec":106274620.79046068,"samples":53162906},{"name":"DefineProperty (getter)","opsSec":106426680.36916901,"samples":53213357},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53145153.631292686,"samples":26572585},{"name":"DefineProperty (getter & configurable=false)","opsSec":107328171.59726979,"samples":53664099},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":55857602.9678282,"samples":27929575},{"name":"DefineProperty (writable)","opsSec":106457638.3664043,"samples":53228831},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107303099.74052587,"samples":53651565},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":107227621.70614833,"samples":53613816},{"name":"DefineProperties (getter)","opsSec":55555815.58095141,"samples":27858283},{"name":"DefineProperties (getter & enumerable=false)","opsSec":55936534.08201154,"samples":27968832},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55858113.970118895,"samples":27929070}]}-->
