## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,990,656|47995825|
|Getter|51,353,924|25676973|
|Method|101,157,798|50578923|
|DefineProperty (getter)|96,942,918|48471467|
|DefineProperty (getter & enumerable=false)|51,845,381|25928467|
|DefineProperty (getter & configurable=false)|96,915,206|48457612|
|DefineProperty (getter & enumerable=false & configurable=false)|51,688,510|25844260|
|DefineProperty (writable)|95,805,241|47902737|
|DefineProperty (writable & enumerable=false)|95,714,132|48151318|
|DefineProperty (writable & enumerable=false & configurable=false)|95,673,817|47847766|
|DefineProperties (getter)|51,577,980|25876147|
|DefineProperties (getter & enumerable=false)|51,863,482|25931747|
|DefineProperties (getter & enumerable=false & configurable=false)|48,460,725|24235074|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:46:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":47995825,"opsSec":95990656.8806639},{"name":"Getter","samples":25676973,"opsSec":51353924.73947515},{"name":"Method","samples":50578923,"opsSec":101157798.05120373},{"name":"DefineProperty (getter)","samples":48471467,"opsSec":96942918.87690465},{"name":"DefineProperty (getter & enumerable=false)","samples":25928467,"opsSec":51845381.397353984},{"name":"DefineProperty (getter & configurable=false)","samples":48457612,"opsSec":96915206.74909319},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25844260,"opsSec":51688510.282560065},{"name":"DefineProperty (writable)","samples":47902737,"opsSec":95805241.76809394},{"name":"DefineProperty (writable & enumerable=false)","samples":48151318,"opsSec":95714132.8683523},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47847766,"opsSec":95673817.4876877},{"name":"DefineProperties (getter)","samples":25876147,"opsSec":51577980.54118321},{"name":"DefineProperties (getter & enumerable=false)","samples":25931747,"opsSec":51863482.07139913},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24235074,"opsSec":48460725.49037856}]}-->
