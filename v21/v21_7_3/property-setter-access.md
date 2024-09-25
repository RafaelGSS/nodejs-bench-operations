## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|13,444,455|6722228|
|Setter|5,732,877|2866439|
|Method|13,168,254|6584128|
|DefineProperty (setter)|13,322,739|6661370|
|DefineProperty (setter & enumerable=false)|5,770,518|2885260|
|DefineProperty (setter & configurable=false)|5,709,195|2854598|
|DefineProperty (setter & enumerable=false & configurable=false)|5,673,542|2836772|
|DefineProperty (writable)|13,385,608|6692805|
|DefineProperty (writable & enumerable=false)|13,065,362|6532682|
|DefineProperty (writable & enumerable=false & configurable=false)|13,411,879|6705940|
|DefineProperties (setter)|13,237,067|6618534|
|DefineProperties (setter & enumerable=false)|5,677,532|2838767|
|DefineProperties (setter & enumerable=false & configurable=false)|5,859,932|2929967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:34:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":13444455.972835615,"samples":6722228},{"name":"Setter","opsSec":5732877.72491638,"samples":2866439},{"name":"Method","opsSec":13168254.288041666,"samples":6584128},{"name":"DefineProperty (setter)","opsSec":13322739.57374431,"samples":6661370},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5770518.718954992,"samples":2885260},{"name":"DefineProperty (setter & configurable=false)","opsSec":5709195.611809627,"samples":2854598},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5673542.97876167,"samples":2836772},{"name":"DefineProperty (writable)","opsSec":13385608.848823614,"samples":6692805},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13065362.327408897,"samples":6532682},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13411879.490644477,"samples":6705940},{"name":"DefineProperties (setter)","opsSec":13237067.311211893,"samples":6618534},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5677532.785031615,"samples":2838767},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5859932.324072688,"samples":2929967}]}-->
