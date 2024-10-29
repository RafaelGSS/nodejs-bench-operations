## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,094,862|68138965|
|Setter|10,518,585|5259295|
|Method|86,422,445|43211232|
|DefineProperty (setter)|102,249,419|51142593|
|DefineProperty (setter & enumerable=false)|10,574,925|5287465|
|DefineProperty (setter & configurable=false)|10,352,164|5176090|
|DefineProperty (setter & enumerable=false & configurable=false)|10,575,998|5288001|
|DefineProperty (writable)|102,006,643|51050203|
|DefineProperty (writable & enumerable=false)|94,464,393|47232236|
|DefineProperty (writable & enumerable=false & configurable=false)|101,064,260|50541785|
|DefineProperties (setter)|94,259,827|47144334|
|DefineProperties (setter & enumerable=false)|10,282,397|5141892|
|DefineProperties (setter & enumerable=false & configurable=false)|10,355,379|5177692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":136094862.54003373,"samples":68138965},{"name":"Setter","opsSec":10518585.70841703,"samples":5259295},{"name":"Method","opsSec":86422445.3327518,"samples":43211232},{"name":"DefineProperty (setter)","opsSec":102249419.97088955,"samples":51142593},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10574925.050935075,"samples":5287465},{"name":"DefineProperty (setter & configurable=false)","opsSec":10352164.471753292,"samples":5176090},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10575998.086880708,"samples":5288001},{"name":"DefineProperty (writable)","opsSec":102006643.32957102,"samples":51050203},{"name":"DefineProperty (writable & enumerable=false)","opsSec":94464393.40562469,"samples":47232236},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101064260.66235785,"samples":50541785},{"name":"DefineProperties (setter)","opsSec":94259827.5090967,"samples":47144334},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10282397.480394155,"samples":5141892},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10355379.27794705,"samples":5177692}]}-->
