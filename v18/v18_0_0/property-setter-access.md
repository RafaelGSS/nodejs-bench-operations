## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|760,171,179|90|
|Setter|9,520,702|94|
|Method|775,754,901|98|
|DefineProperty (setter)|777,516,053|95|
|DefineProperty (setter & enumerable=false)|9,395,275|93|
|DefineProperty (setter & configurable=false)|9,544,241|93|
|DefineProperty (setter & enumerable=false & configurable=false)|9,548,974|93|
|DefineProperty (writable)|647,456,463|79|
|DefineProperty (writable & enumerable=false)|128,938,655|81|
|DefineProperty (writable & enumerable=false & configurable=false)|118,156,687|75|
|DefineProperties (setter)|98,669,606|83|
|DefineProperties (setter & enumerable=false)|8,836,930|95|
|DefineProperties (setter & enumerable=false & configurable=false)|9,536,096|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":760171179.3714331,"samples":6},{"name":"Setter","opsSec":9520702.193538263,"samples":6},{"name":"Method","opsSec":775754901.3449109,"samples":6},{"name":"DefineProperty (setter)","opsSec":777516052.5106035,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9395275.483704451,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9544240.784575325,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9548974.427769259,"samples":4},{"name":"DefineProperty (writable)","opsSec":647456463.3237431,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":128938654.73386441,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":118156687.34558979,"samples":5},{"name":"DefineProperties (setter)","opsSec":98669606.20025624,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8836930.139485897,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9536095.730355538,"samples":5}]}-->
