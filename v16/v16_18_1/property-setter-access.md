## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|841,184,942|98|
|Setter|10,599,812|99|
|Method|846,353,855|96|
|DefineProperty (setter)|842,657,739|99|
|DefineProperty (setter & enumerable=false)|10,850,761|98|
|DefineProperty (setter & configurable=false)|10,968,708|98|
|DefineProperty (setter & enumerable=false & configurable=false)|10,919,994|98|
|DefineProperty (writable)|850,131,337|100|
|DefineProperty (writable & enumerable=false)|849,774,546|97|
|DefineProperty (writable & enumerable=false & configurable=false)|201,748,366|25|
|DefineProperties (setter)|115,813,619|83|
|DefineProperties (setter & enumerable=false)|10,668,821|98|
|DefineProperties (setter & enumerable=false & configurable=false)|10,524,218|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:14:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":841184942.0205836,"samples":6},{"name":"Setter","opsSec":10599811.901117006,"samples":6},{"name":"Method","opsSec":846353855.3582678,"samples":8},{"name":"DefineProperty (setter)","opsSec":842657738.7504783,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10850760.65063751,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10968708.428512309,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10919994.349783586,"samples":6},{"name":"DefineProperty (writable)","opsSec":850131336.5111969,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849774546.4689144,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":201748366.4660899,"samples":9},{"name":"DefineProperties (setter)","opsSec":115813619.19311582,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10668821.238380207,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10524218.483081104,"samples":6}]}-->
