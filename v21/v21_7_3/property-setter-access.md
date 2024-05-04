## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|864,976,216|97|
|Setter|13,830,892|97|
|Method|867,958,842|96|
|DefineProperty (setter)|838,164,202|95|
|DefineProperty (setter & enumerable=false)|13,908,788|99|
|DefineProperty (setter & configurable=false)|13,876,322|97|
|DefineProperty (setter & enumerable=false & configurable=false)|13,759,338|96|
|DefineProperty (writable)|869,063,724|96|
|DefineProperty (writable & enumerable=false)|869,701,407|97|
|DefineProperty (writable & enumerable=false & configurable=false)|868,763,472|97|
|DefineProperties (setter)|869,163,627|98|
|DefineProperties (setter & enumerable=false)|13,675,654|98|
|DefineProperties (setter & enumerable=false & configurable=false)|12,563,405|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:08:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":864976216.1832819,"samples":6},{"name":"Setter","opsSec":13830891.742376845,"samples":6},{"name":"Method","opsSec":867958842.2818623,"samples":6},{"name":"DefineProperty (setter)","opsSec":838164202.2699968,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13908787.613023985,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":13876322.463097759,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13759338.390978158,"samples":5},{"name":"DefineProperty (writable)","opsSec":869063723.7687808,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":869701406.7572429,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":868763471.9273721,"samples":8},{"name":"DefineProperties (setter)","opsSec":869163627.2392455,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13675653.64460286,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12563404.826335507,"samples":5}]}-->
