## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|567,554,979|90|
|Setter|5,466,843|96|
|Method|295,771,994|99|
|DefineProperty (setter)|573,802,522|92|
|DefineProperty (setter & enumerable=false)|5,288,606|97|
|DefineProperty (setter & configurable=false)|5,447,139|99|
|DefineProperty (setter & enumerable=false & configurable=false)|5,498,679|93|
|DefineProperty (writable)|586,339,496|96|
|DefineProperty (writable & enumerable=false)|197,881,183|34|
|DefineProperty (writable & enumerable=false & configurable=false)|67,109,775|80|
|DefineProperties (setter)|47,779,715|83|
|DefineProperties (setter & enumerable=false)|5,414,581|99|
|DefineProperties (setter & enumerable=false & configurable=false)|5,417,934|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":567554978.6284537,"samples":11},{"name":"Setter","opsSec":5466842.578243825,"samples":5},{"name":"Method","opsSec":295771993.5789944,"samples":7},{"name":"DefineProperty (setter)","opsSec":573802521.8954552,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5288605.915633083,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5447138.701383205,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5498678.774423502,"samples":6},{"name":"DefineProperty (writable)","opsSec":586339495.897133,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":197881182.5796395,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":67109774.66272949,"samples":4},{"name":"DefineProperties (setter)","opsSec":47779715.3697129,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5414581.269331962,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5417934.434488867,"samples":7}]}-->
