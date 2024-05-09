## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,034,705|8017353|
|Getter|12,580,865|6290433|
|Method|15,094,659|7547330|
|DefineProperty (getter)|16,062,347|8031175|
|DefineProperty (getter & enumerable=false)|13,941,786|6970894|
|DefineProperty (getter & configurable=false)|16,139,195|8069599|
|DefineProperty (getter & enumerable=false & configurable=false)|13,999,689|6999845|
|DefineProperty (writable)|16,202,573|8101287|
|DefineProperty (writable & enumerable=false)|16,090,948|8045475|
|DefineProperty (writable & enumerable=false & configurable=false)|16,143,141|8071571|
|DefineProperties (getter)|13,991,115|6995558|
|DefineProperties (getter & enumerable=false)|13,980,593|6990297|
|DefineProperties (getter & enumerable=false & configurable=false)|13,956,106|6978054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16034705.294532726,"samples":8017353},{"name":"Getter","opsSec":12580865.647702208,"samples":6290433},{"name":"Method","opsSec":15094659.637729036,"samples":7547330},{"name":"DefineProperty (getter)","opsSec":16062347.97613114,"samples":8031175},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13941786.522091614,"samples":6970894},{"name":"DefineProperty (getter & configurable=false)","opsSec":16139195.99879961,"samples":8069599},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13999689.020024493,"samples":6999845},{"name":"DefineProperty (writable)","opsSec":16202573.967685498,"samples":8101287},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16090948.101385847,"samples":8045475},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16143141.289749937,"samples":8071571},{"name":"DefineProperties (getter)","opsSec":13991115.63627607,"samples":6995558},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13980593.664346829,"samples":6990297},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13956106.464830408,"samples":6978054}]}-->
