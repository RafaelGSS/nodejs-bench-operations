## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,166,394|49083283|
|Getter|50,647,232|25324052|
|Method|92,487,503|46243770|
|DefineProperty (getter)|99,188,262|49594361|
|DefineProperty (getter & enumerable=false)|52,175,014|26087514|
|DefineProperty (getter & configurable=false)|101,467,627|50734064|
|DefineProperty (getter & enumerable=false & configurable=false)|51,390,931|25695471|
|DefineProperty (writable)|102,813,243|51406629|
|DefineProperty (writable & enumerable=false)|102,589,581|51294798|
|DefineProperty (writable & enumerable=false & configurable=false)|100,817,379|50408706|
|DefineProperties (getter)|52,824,905|26474245|
|DefineProperties (getter & enumerable=false)|53,152,390|26576202|
|DefineProperties (getter & enumerable=false & configurable=false)|52,613,016|26306575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49083283,"opsSec":98166394.20881014},{"name":"Getter","samples":25324052,"opsSec":50647232.5637165},{"name":"Method","samples":46243770,"opsSec":92487503.18997373},{"name":"DefineProperty (getter)","samples":49594361,"opsSec":99188262.95671904},{"name":"DefineProperty (getter & enumerable=false)","samples":26087514,"opsSec":52175014.747546256},{"name":"DefineProperty (getter & configurable=false)","samples":50734064,"opsSec":101467627.15579236},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25695471,"opsSec":51390931.41346813},{"name":"DefineProperty (writable)","samples":51406629,"opsSec":102813243.40051945},{"name":"DefineProperty (writable & enumerable=false)","samples":51294798,"opsSec":102589581.8426377},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50408706,"opsSec":100817379.13353439},{"name":"DefineProperties (getter)","samples":26474245,"opsSec":52824905.81589428},{"name":"DefineProperties (getter & enumerable=false)","samples":26576202,"opsSec":53152390.81820707},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26306575,"opsSec":52613016.468164206}]}-->
