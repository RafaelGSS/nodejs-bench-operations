## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,627,267|7313634|
|Setter|5,975,219|2987610|
|Method|14,354,646|7177324|
|DefineProperty (setter)|14,724,123|7362062|
|DefineProperty (setter & enumerable=false)|5,911,597|2955799|
|DefineProperty (setter & configurable=false)|5,976,434|2988218|
|DefineProperty (setter & enumerable=false & configurable=false)|5,959,772|2979887|
|DefineProperty (writable)|14,540,176|7270089|
|DefineProperty (writable & enumerable=false)|14,704,376|7352190|
|DefineProperty (writable & enumerable=false & configurable=false)|15,217,289|7608645|
|DefineProperties (setter)|14,763,653|7381827|
|DefineProperties (setter & enumerable=false)|6,105,677|3052839|
|DefineProperties (setter & enumerable=false & configurable=false)|6,118,835|3059418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:37:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14627267.063387375,"samples":7313634},{"name":"Setter","opsSec":5975219.067711781,"samples":2987610},{"name":"Method","opsSec":14354646.622319011,"samples":7177324},{"name":"DefineProperty (setter)","opsSec":14724123.175570741,"samples":7362062},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5911597.680734304,"samples":2955799},{"name":"DefineProperty (setter & configurable=false)","opsSec":5976434.613522968,"samples":2988218},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5959772.223956662,"samples":2979887},{"name":"DefineProperty (writable)","opsSec":14540176.691301348,"samples":7270089},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14704376.823767727,"samples":7352190},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15217289.939016113,"samples":7608645},{"name":"DefineProperties (setter)","opsSec":14763653.11395751,"samples":7381827},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6105677.059664374,"samples":3052839},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6118835.95103131,"samples":3059418}]}-->
