## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,177,637|7088819|
|Setter|5,524,590|2762296|
|Method|14,617,882|7308942|
|DefineProperty (setter)|14,276,099|7138050|
|DefineProperty (setter & enumerable=false)|5,545,752|2772877|
|DefineProperty (setter & configurable=false)|5,536,056|2768029|
|DefineProperty (setter & enumerable=false & configurable=false)|5,537,838|2768920|
|DefineProperty (writable)|14,242,303|7121152|
|DefineProperty (writable & enumerable=false)|14,302,089|7151045|
|DefineProperty (writable & enumerable=false & configurable=false)|13,993,496|6996749|
|DefineProperties (setter)|13,982,953|6991477|
|DefineProperties (setter & enumerable=false)|5,526,594|2763298|
|DefineProperties (setter & enumerable=false & configurable=false)|5,533,161|2766581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:21:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14177637.597490666,"samples":7088819},{"name":"Setter","opsSec":5524590.840380196,"samples":2762296},{"name":"Method","opsSec":14617882.35412623,"samples":7308942},{"name":"DefineProperty (setter)","opsSec":14276099.913365517,"samples":7138050},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5545752.65948518,"samples":2772877},{"name":"DefineProperty (setter & configurable=false)","opsSec":5536056.3746684985,"samples":2768029},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5537838.549521377,"samples":2768920},{"name":"DefineProperty (writable)","opsSec":14242303.498295704,"samples":7121152},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14302089.79023886,"samples":7151045},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13993496.684034383,"samples":6996749},{"name":"DefineProperties (setter)","opsSec":13982953.268596446,"samples":6991477},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5526594.378887619,"samples":2763298},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5533161.852660891,"samples":2766581}]}-->
