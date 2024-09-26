## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,522,526|70768113|
|Getter|50,119,956|25059991|
|Method|92,934,135|46468018|
|DefineProperty (getter)|93,236,790|46623814|
|DefineProperty (getter & enumerable=false)|49,998,888|25000375|
|DefineProperty (getter & configurable=false)|93,466,216|46734031|
|DefineProperty (getter & enumerable=false & configurable=false)|48,734,821|24367800|
|DefineProperty (writable)|88,907,110|44456999|
|DefineProperty (writable & enumerable=false)|94,319,507|47159762|
|DefineProperty (writable & enumerable=false & configurable=false)|94,963,976|47482061|
|DefineProperties (getter)|45,052,365|22526214|
|DefineProperties (getter & enumerable=false)|48,210,060|24106619|
|DefineProperties (getter & enumerable=false & configurable=false)|50,299,946|25149979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":141522526.61942324,"samples":70768113},{"name":"Getter","opsSec":50119956.539062075,"samples":25059991},{"name":"Method","opsSec":92934135.86865804,"samples":46468018},{"name":"DefineProperty (getter)","opsSec":93236790.15551232,"samples":46623814},{"name":"DefineProperty (getter & enumerable=false)","opsSec":49998888.44138555,"samples":25000375},{"name":"DefineProperty (getter & configurable=false)","opsSec":93466216.22916192,"samples":46734031},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48734821.60742929,"samples":24367800},{"name":"DefineProperty (writable)","opsSec":88907110.36615995,"samples":44456999},{"name":"DefineProperty (writable & enumerable=false)","opsSec":94319507.96568364,"samples":47159762},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94963976.51518798,"samples":47482061},{"name":"DefineProperties (getter)","opsSec":45052365.91783976,"samples":22526214},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48210060.089259036,"samples":24106619},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50299946.22981258,"samples":25149979}]}-->
