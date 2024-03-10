## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|776,822,729|98|
|Setter|11,544,422|91|
|Method|627,579,153|96|
|DefineProperty (setter)|779,175,572|98|
|DefineProperty (setter & enumerable=false)|11,561,278|94|
|DefineProperty (setter & configurable=false)|10,728,302|95|
|DefineProperty (setter & enumerable=false & configurable=false)|11,624,262|95|
|DefineProperty (writable)|787,657,942|99|
|DefineProperty (writable & enumerable=false)|481,396,660|64|
|DefineProperty (writable & enumerable=false & configurable=false)|113,538,145|87|
|DefineProperties (setter)|116,416,780|88|
|DefineProperties (setter & enumerable=false)|11,362,789|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,980,315|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":776822728.8545372,"samples":6},{"name":"Setter","opsSec":11544422.111978417,"samples":5},{"name":"Method","opsSec":627579152.8192941,"samples":7},{"name":"DefineProperty (setter)","opsSec":779175571.6839905,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11561278.389908751,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":10728301.869443191,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11624261.876577923,"samples":5},{"name":"DefineProperty (writable)","opsSec":787657942.439823,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":481396659.55300885,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":113538145.26614422,"samples":5},{"name":"DefineProperties (setter)","opsSec":116416779.58075619,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11362789.258439587,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10980315.285582941,"samples":4}]}-->
