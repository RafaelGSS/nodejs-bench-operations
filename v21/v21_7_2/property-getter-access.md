## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|909,920,855|98|
|Getter|102,493,200|96|
|Method|910,181,304|98|
|DefineProperty (getter)|909,522,023|97|
|DefineProperty (getter & enumerable=false)|102,544,212|98|
|DefineProperty (getter & configurable=false)|911,086,258|98|
|DefineProperty (getter & enumerable=false & configurable=false)|102,539,084|97|
|DefineProperty (writable)|910,907,526|98|
|DefineProperty (writable & enumerable=false)|911,230,289|100|
|DefineProperty (writable & enumerable=false & configurable=false)|910,743,713|99|
|DefineProperties (getter)|102,566,910|96|
|DefineProperties (getter & enumerable=false)|98,878,429|96|
|DefineProperties (getter & enumerable=false & configurable=false)|63,698,814|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:51:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":909920854.9754535,"samples":6},{"name":"Getter","opsSec":102493200.47415468,"samples":7},{"name":"Method","opsSec":910181303.9331081,"samples":7},{"name":"DefineProperty (getter)","opsSec":909522022.9172161,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102544212.04750307,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":911086257.9681963,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102539084.31325684,"samples":6},{"name":"DefineProperty (writable)","opsSec":910907525.6277211,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":911230288.941458,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":910743713.4442714,"samples":6},{"name":"DefineProperties (getter)","opsSec":102566910.34191701,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98878429.07387483,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":63698813.67617602,"samples":4}]}-->
