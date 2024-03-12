## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|844,852,330|97|
|Getter|87,725,527|95|
|Method|795,061,635|97|
|DefineProperty (getter)|845,626,474|94|
|DefineProperty (getter & enumerable=false)|88,301,627|91|
|DefineProperty (getter & configurable=false)|844,401,489|98|
|DefineProperty (getter & enumerable=false & configurable=false)|87,694,039|92|
|DefineProperty (writable)|845,309,395|99|
|DefineProperty (writable & enumerable=false)|765,801,783|91|
|DefineProperty (writable & enumerable=false & configurable=false)|128,990,300|87|
|DefineProperties (getter)|55,384,919|92|
|DefineProperties (getter & enumerable=false)|87,953,593|97|
|DefineProperties (getter & enumerable=false & configurable=false)|87,973,545|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":844852330.0108006,"samples":7},{"name":"Getter","opsSec":87725527.37824814,"samples":6},{"name":"Method","opsSec":795061635.3745862,"samples":6},{"name":"DefineProperty (getter)","opsSec":845626473.8684117,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":88301627.2445621,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":844401489.0270805,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":87694039.43792778,"samples":5},{"name":"DefineProperty (writable)","opsSec":845309395.2922592,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":765801783.3826052,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":128990300.10946357,"samples":5},{"name":"DefineProperties (getter)","opsSec":55384919.20470695,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":87953592.53002949,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":87973545.04841952,"samples":6}]}-->
