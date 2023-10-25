## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|421,428,175|85|
|Setter|6,921,385|87|
|Method|434,943,904|89|
|DefineProperty (setter)|440,121,387|89|
|DefineProperty (setter & enumerable=false)|6,642,829|92|
|DefineProperty (setter & configurable=false)|6,746,057|88|
|DefineProperty (setter & enumerable=false & configurable=false)|6,735,887|89|
|DefineProperty (writable)|620,623,435|89|
|DefineProperty (writable & enumerable=false)|590,734,127|89|
|DefineProperty (writable & enumerable=false & configurable=false)|83,647,866|85|
|DefineProperties (setter)|60,958,736|81|
|DefineProperties (setter & enumerable=false)|6,298,994|88|
|DefineProperties (setter & enumerable=false & configurable=false)|6,807,540|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":421428175.431667,"samples":5},{"name":"Setter","opsSec":6921384.527557432,"samples":5},{"name":"Method","opsSec":434943904.3914674,"samples":8},{"name":"DefineProperty (setter)","opsSec":440121387.46376485,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6642828.888381087,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":6746056.621737962,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6735886.848562771,"samples":4},{"name":"DefineProperty (writable)","opsSec":620623434.7355955,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590734127.2629822,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83647865.6288469,"samples":5},{"name":"DefineProperties (setter)","opsSec":60958735.76229106,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6298994.033360253,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6807540.084833251,"samples":4}]}-->
