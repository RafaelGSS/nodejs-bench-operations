## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|863,595,758|97|
|Setter|13,773,552|99|
|Method|867,991,991|98|
|DefineProperty (setter)|839,051,757|97|
|DefineProperty (setter & enumerable=false)|13,881,758|98|
|DefineProperty (setter & configurable=false)|13,836,521|97|
|DefineProperty (setter & enumerable=false & configurable=false)|13,580,185|99|
|DefineProperty (writable)|869,649,447|99|
|DefineProperty (writable & enumerable=false)|869,497,441|98|
|DefineProperty (writable & enumerable=false & configurable=false)|492,752,775|58|
|DefineProperties (setter)|123,319,648|82|
|DefineProperties (setter & enumerable=false)|12,448,790|94|
|DefineProperties (setter & enumerable=false & configurable=false)|13,737,967|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:07:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":863595757.6389309,"samples":8},{"name":"Setter","opsSec":13773552.10516731,"samples":6},{"name":"Method","opsSec":867991991.1950066,"samples":7},{"name":"DefineProperty (setter)","opsSec":839051756.8643948,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13881757.675595354,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":13836521.020324977,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13580184.98988669,"samples":6},{"name":"DefineProperty (writable)","opsSec":869649447.4058065,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":869497441.228001,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":492752775.4541219,"samples":6},{"name":"DefineProperties (setter)","opsSec":123319647.76218943,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12448789.696527982,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":13737966.59540369,"samples":6}]}-->
