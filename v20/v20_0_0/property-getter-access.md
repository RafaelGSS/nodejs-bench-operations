## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|597,721,147|98|
|Getter|68,337,863|96|
|Method|598,061,350|96|
|DefineProperty (getter)|598,807,769|97|
|DefineProperty (getter & enumerable=false)|68,392,511|98|
|DefineProperty (getter & configurable=false)|597,399,176|99|
|DefineProperty (getter & enumerable=false & configurable=false)|61,795,896|91|
|DefineProperty (writable)|597,476,702|96|
|DefineProperty (writable & enumerable=false)|598,743,398|95|
|DefineProperty (writable & enumerable=false & configurable=false)|179,894,392|32|
|DefineProperties (getter)|68,249,914|97|
|DefineProperties (getter & enumerable=false)|68,172,657|96|
|DefineProperties (getter & enumerable=false & configurable=false)|68,413,493|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":597721146.7622209,"samples":6},{"name":"Getter","opsSec":68337862.58695109,"samples":6},{"name":"Method","opsSec":598061349.8495392,"samples":7},{"name":"DefineProperty (getter)","opsSec":598807768.6854368,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68392511.09328263,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":597399176.4362254,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":61795896.06141269,"samples":5},{"name":"DefineProperty (writable)","opsSec":597476702.2761172,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":598743397.532756,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":179894392.4702201,"samples":7},{"name":"DefineProperties (getter)","opsSec":68249913.61999902,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68172656.50255169,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":68413493.0540717,"samples":5}]}-->
