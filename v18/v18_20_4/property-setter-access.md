## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,838,997|76919579|
|Setter|10,318,916|5159513|
|Method|102,619,664|51319807|
|DefineProperty (setter)|104,571,518|52290823|
|DefineProperty (setter & enumerable=false)|10,502,737|5251372|
|DefineProperty (setter & configurable=false)|10,409,619|5204890|
|DefineProperty (setter & enumerable=false & configurable=false)|10,604,530|5302463|
|DefineProperty (writable)|98,836,972|49574393|
|DefineProperty (writable & enumerable=false)|97,762,668|48883644|
|DefineProperty (writable & enumerable=false & configurable=false)|98,450,815|49228257|
|DefineProperties (setter)|94,869,587|47434798|
|DefineProperties (setter & enumerable=false)|9,964,653|4982336|
|DefineProperties (setter & enumerable=false & configurable=false)|10,326,024|5163481|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:58:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":153838997.08440906,"samples":76919579},{"name":"Setter","opsSec":10318916.392470079,"samples":5159513},{"name":"Method","opsSec":102619664.32677622,"samples":51319807},{"name":"DefineProperty (setter)","opsSec":104571518.03933486,"samples":52290823},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10502737.488302758,"samples":5251372},{"name":"DefineProperty (setter & configurable=false)","opsSec":10409619.60858107,"samples":5204890},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10604530.196514945,"samples":5302463},{"name":"DefineProperty (writable)","opsSec":98836972.15513583,"samples":49574393},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97762668.51838715,"samples":48883644},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98450815.27300873,"samples":49228257},{"name":"DefineProperties (setter)","opsSec":94869587.27199796,"samples":47434798},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9964653.645107985,"samples":4982336},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10326024.58283632,"samples":5163481}]}-->
