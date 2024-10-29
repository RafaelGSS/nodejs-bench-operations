## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,704,189|76852173|
|Setter|10,710,173|5355089|
|Method|92,236,362|46122659|
|DefineProperty (setter)|93,364,474|46683681|
|DefineProperty (setter & enumerable=false)|10,601,156|5300660|
|DefineProperty (setter & configurable=false)|10,777,638|5389065|
|DefineProperty (setter & enumerable=false & configurable=false)|10,584,531|5293518|
|DefineProperty (writable)|99,834,764|49917394|
|DefineProperty (writable & enumerable=false)|101,076,617|50538555|
|DefineProperty (writable & enumerable=false & configurable=false)|88,462,263|44231142|
|DefineProperties (setter)|90,232,422|45118459|
|DefineProperties (setter & enumerable=false)|10,438,612|5220349|
|DefineProperties (setter & enumerable=false & configurable=false)|10,843,888|5422321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:58:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":153704189.52913505,"samples":76852173},{"name":"Setter","opsSec":10710173.565988144,"samples":5355089},{"name":"Method","opsSec":92236362.40262888,"samples":46122659},{"name":"DefineProperty (setter)","opsSec":93364474.79698138,"samples":46683681},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10601156.148530567,"samples":5300660},{"name":"DefineProperty (setter & configurable=false)","opsSec":10777638.992322788,"samples":5389065},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10584531.08604224,"samples":5293518},{"name":"DefineProperty (writable)","opsSec":99834764.03965662,"samples":49917394},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101076617.35256702,"samples":50538555},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":88462263.65367937,"samples":44231142},{"name":"DefineProperties (setter)","opsSec":90232422.07933748,"samples":45118459},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10438612.219138047,"samples":5220349},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10843888.50156358,"samples":5422321}]}-->
