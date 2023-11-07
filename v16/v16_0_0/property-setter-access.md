## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,731,489|97|
|Setter|10,509,148|94|
|Method|749,834,688|88|
|DefineProperty (setter)|845,350,318|96|
|DefineProperty (setter & enumerable=false)|10,576,990|98|
|DefineProperty (setter & configurable=false)|10,198,822|92|
|DefineProperty (setter & enumerable=false & configurable=false)|10,357,436|94|
|DefineProperty (writable)|574,851,115|69|
|DefineProperty (writable & enumerable=false)|130,839,371|78|
|DefineProperty (writable & enumerable=false & configurable=false)|129,310,874|76|
|DefineProperties (setter)|107,704,301|82|
|DefineProperties (setter & enumerable=false)|10,228,015|97|
|DefineProperties (setter & enumerable=false & configurable=false)|10,478,207|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:35:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842731489.2875197,"samples":6},{"name":"Setter","opsSec":10509147.67942229,"samples":6},{"name":"Method","opsSec":749834687.8761508,"samples":5},{"name":"DefineProperty (setter)","opsSec":845350318.057046,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10576990.282538405,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":10198821.991831029,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10357436.115314681,"samples":6},{"name":"DefineProperty (writable)","opsSec":574851114.7087792,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":130839371.31633425,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":129310874.27136078,"samples":4},{"name":"DefineProperties (setter)","opsSec":107704300.94795269,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10228015.232884366,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10478207.074623032,"samples":6}]}-->
