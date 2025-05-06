## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,217,048|50108548|
|Setter|10,818,526|5409267|
|Method|100,923,215|50466294|
|DefineProperty (setter)|100,236,617|50119147|
|DefineProperty (setter & enumerable=false)|10,889,969|5446002|
|DefineProperty (setter & configurable=false)|10,748,721|5374363|
|DefineProperty (setter & enumerable=false & configurable=false)|10,905,547|5452779|
|DefineProperty (writable)|97,776,511|48888263|
|DefineProperty (writable & enumerable=false)|99,378,055|49689047|
|DefineProperty (writable & enumerable=false & configurable=false)|88,216,576|44108291|
|DefineProperties (setter)|90,730,906|45365467|
|DefineProperties (setter & enumerable=false)|11,017,594|5508800|
|DefineProperties (setter & enumerable=false & configurable=false)|10,821,357|5410682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":50108548,"opsSec":100217048.89798701},{"name":"Setter","samples":5409267,"opsSec":10818526.794861155},{"name":"Method","samples":50466294,"opsSec":100923215.26099871},{"name":"DefineProperty (setter)","samples":50119147,"opsSec":100236617.64280654},{"name":"DefineProperty (setter & enumerable=false)","samples":5446002,"opsSec":10889969.557667175},{"name":"DefineProperty (setter & configurable=false)","samples":5374363,"opsSec":10748721.893988235},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5452779,"opsSec":10905547.617918668},{"name":"DefineProperty (writable)","samples":48888263,"opsSec":97776511.72462928},{"name":"DefineProperty (writable & enumerable=false)","samples":49689047,"opsSec":99378055.83882655},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44108291,"opsSec":88216576.88343854},{"name":"DefineProperties (setter)","samples":45365467,"opsSec":90730906.41780445},{"name":"DefineProperties (setter & enumerable=false)","samples":5508800,"opsSec":11017594.469167577},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5410682,"opsSec":10821357.701969817}]}-->
