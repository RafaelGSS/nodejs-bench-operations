## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|781,198,361|97|
|Setter|11,795,393|92|
|Method|784,306,445|98|
|DefineProperty (setter)|787,963,798|100|
|DefineProperty (setter & enumerable=false)|11,878,989|95|
|DefineProperty (setter & configurable=false)|11,907,207|91|
|DefineProperty (setter & enumerable=false & configurable=false)|12,079,501|95|
|DefineProperty (writable)|758,273,060|91|
|DefineProperty (writable & enumerable=false)|787,321,758|95|
|DefineProperty (writable & enumerable=false & configurable=false)|788,661,409|98|
|DefineProperties (setter)|794,879,892|97|
|DefineProperties (setter & enumerable=false)|11,305,172|90|
|DefineProperties (setter & enumerable=false & configurable=false)|10,919,313|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":781198361.0221204,"samples":6},{"name":"Setter","opsSec":11795393.289378595,"samples":6},{"name":"Method","opsSec":784306445.4804481,"samples":9},{"name":"DefineProperty (setter)","opsSec":787963798.3209372,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11878988.810024539,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11907206.847061248,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12079500.685088268,"samples":4},{"name":"DefineProperty (writable)","opsSec":758273059.8627577,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":787321757.8292335,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":788661409.0795926,"samples":9},{"name":"DefineProperties (setter)","opsSec":794879892.0383996,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11305172.04439787,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10919313.06201768,"samples":4}]}-->
