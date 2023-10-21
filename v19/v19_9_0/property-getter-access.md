## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|594,179,641|96|
|Getter|71,943,182|96|
|Method|596,364,997|95|
|DefineProperty (getter)|596,314,115|97|
|DefineProperty (getter & enumerable=false)|71,948,024|96|
|DefineProperty (getter & configurable=false)|597,355,878|94|
|DefineProperty (getter & enumerable=false & configurable=false)|71,816,016|96|
|DefineProperty (writable)|596,306,705|96|
|DefineProperty (writable & enumerable=false)|596,614,802|95|
|DefineProperty (writable & enumerable=false & configurable=false)|596,146,955|95|
|DefineProperties (getter)|61,960,989|83|
|DefineProperties (getter & enumerable=false)|45,180,361|87|
|DefineProperties (getter & enumerable=false & configurable=false)|44,795,038|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":594179640.7342566,"samples":6},{"name":"Getter","opsSec":71943182.37963869,"samples":6},{"name":"Method","opsSec":596364997.0920249,"samples":7},{"name":"DefineProperty (getter)","opsSec":596314115.2194829,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71948023.74747857,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":597355877.861981,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":71816015.86192039,"samples":5},{"name":"DefineProperty (writable)","opsSec":596306704.7392157,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":596614801.7632239,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":596146954.8102089,"samples":6},{"name":"DefineProperties (getter)","opsSec":61960988.69754825,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45180361.26450195,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":44795038.01935155,"samples":4}]}-->
