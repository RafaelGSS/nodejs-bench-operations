## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,763,475|7881738|
|Setter|6,675,723|3337862|
|Method|15,880,825|7940413|
|DefineProperty (setter)|15,589,384|7794693|
|DefineProperty (setter & enumerable=false)|6,274,623|3137312|
|DefineProperty (setter & configurable=false)|6,152,091|3076046|
|DefineProperty (setter & enumerable=false & configurable=false)|6,522,526|3261307|
|DefineProperty (writable)|15,958,994|7979498|
|DefineProperty (writable & enumerable=false)|15,951,910|7975956|
|DefineProperty (writable & enumerable=false & configurable=false)|15,926,898|7963450|
|DefineProperties (setter)|15,940,209|7970105|
|DefineProperties (setter & enumerable=false)|6,569,403|3284702|
|DefineProperties (setter & enumerable=false & configurable=false)|6,573,138|3286570|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:50:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15763475.873893138,"samples":7881738},{"name":"Setter","opsSec":6675723.41255155,"samples":3337862},{"name":"Method","opsSec":15880825.5871772,"samples":7940413},{"name":"DefineProperty (setter)","opsSec":15589384.752882544,"samples":7794693},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6274623.648618446,"samples":3137312},{"name":"DefineProperty (setter & configurable=false)","opsSec":6152091.212526955,"samples":3076046},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6522526.846001139,"samples":3261307},{"name":"DefineProperty (writable)","opsSec":15958994.531819731,"samples":7979498},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15951910.659922056,"samples":7975956},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15926898.566514213,"samples":7963450},{"name":"DefineProperties (setter)","opsSec":15940209.553654611,"samples":7970105},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6569403.434992875,"samples":3284702},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6573138.80358369,"samples":3286570}]}-->
