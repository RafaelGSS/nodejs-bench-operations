## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|569,634,495|98|
|Setter|8,531,764|98|
|Method|571,800,677|97|
|DefineProperty (setter)|549,503,229|94|
|DefineProperty (setter & enumerable=false)|8,606,044|97|
|DefineProperty (setter & configurable=false)|8,640,297|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,610,942|95|
|DefineProperty (writable)|574,908,475|96|
|DefineProperty (writable & enumerable=false)|573,882,707|97|
|DefineProperty (writable & enumerable=false & configurable=false)|505,261,845|86|
|DefineProperties (setter)|679,064,751|94|
|DefineProperties (setter & enumerable=false)|8,608,439|95|
|DefineProperties (setter & enumerable=false & configurable=false)|8,261,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:38:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":569634495.3070189,"samples":7},{"name":"Setter","opsSec":8531764.0588526,"samples":5},{"name":"Method","opsSec":571800677.0765457,"samples":7},{"name":"DefineProperty (setter)","opsSec":549503228.7475004,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8606044.42669506,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8640297.310283573,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8610941.754826458,"samples":5},{"name":"DefineProperty (writable)","opsSec":574908475.2233828,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":573882706.7558352,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":505261844.5429109,"samples":7},{"name":"DefineProperties (setter)","opsSec":679064751.101804,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8608439.100354645,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8261713.550216781,"samples":6}]}-->
