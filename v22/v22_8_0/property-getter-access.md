## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|140,685,356|70343570|
|Getter|51,059,989|25530003|
|Method|88,080,833|44046623|
|DefineProperty (getter)|95,207,617|47604496|
|DefineProperty (getter & enumerable=false)|51,172,614|25587940|
|DefineProperty (getter & configurable=false)|98,025,031|49024332|
|DefineProperty (getter & enumerable=false & configurable=false)|48,851,173|24431781|
|DefineProperty (writable)|97,019,074|48519030|
|DefineProperty (writable & enumerable=false)|98,039,071|49034556|
|DefineProperty (writable & enumerable=false & configurable=false)|95,951,257|47975638|
|DefineProperties (getter)|51,269,627|25634827|
|DefineProperties (getter & enumerable=false)|51,216,813|25629724|
|DefineProperties (getter & enumerable=false & configurable=false)|50,565,331|25288129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:56:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":140685356.6724188,"samples":70343570},{"name":"Getter","opsSec":51059989.04808364,"samples":25530003},{"name":"Method","opsSec":88080833.64892219,"samples":44046623},{"name":"DefineProperty (getter)","opsSec":95207617.77324507,"samples":47604496},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51172614.98247366,"samples":25587940},{"name":"DefineProperty (getter & configurable=false)","opsSec":98025031.53724682,"samples":49024332},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48851173.44011793,"samples":24431781},{"name":"DefineProperty (writable)","opsSec":97019074.14334275,"samples":48519030},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98039071.4559589,"samples":49034556},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":95951257.57735856,"samples":47975638},{"name":"DefineProperties (getter)","opsSec":51269627.64741139,"samples":25634827},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51216813.48551663,"samples":25629724},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50565331.13533364,"samples":25288129}]}-->
