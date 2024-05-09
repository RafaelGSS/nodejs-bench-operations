## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,386,771|8193386|
|Setter|6,741,587|3370794|
|Method|16,296,630|8148316|
|DefineProperty (setter)|16,303,921|8151961|
|DefineProperty (setter & enumerable=false)|6,708,281|3354141|
|DefineProperty (setter & configurable=false)|6,776,614|3388308|
|DefineProperty (setter & enumerable=false & configurable=false)|6,834,043|3417022|
|DefineProperty (writable)|16,353,826|8176914|
|DefineProperty (writable & enumerable=false)|16,314,836|8157419|
|DefineProperty (writable & enumerable=false & configurable=false)|16,093,179|8046590|
|DefineProperties (setter)|16,316,163|8158082|
|DefineProperties (setter & enumerable=false)|6,592,265|3296133|
|DefineProperties (setter & enumerable=false & configurable=false)|6,819,070|3409536|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16386771.695260955,"samples":8193386},{"name":"Setter","opsSec":6741587.180266986,"samples":3370794},{"name":"Method","opsSec":16296630.220477907,"samples":8148316},{"name":"DefineProperty (setter)","opsSec":16303921.813416421,"samples":8151961},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6708281.510590042,"samples":3354141},{"name":"DefineProperty (setter & configurable=false)","opsSec":6776614.180754764,"samples":3388308},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6834043.7425606465,"samples":3417022},{"name":"DefineProperty (writable)","opsSec":16353826.682119032,"samples":8176914},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16314836.482993549,"samples":8157419},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16093179.163552986,"samples":8046590},{"name":"DefineProperties (setter)","opsSec":16316163.82883663,"samples":8158082},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6592265.814537199,"samples":3296133},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6819070.514025104,"samples":3409536}]}-->
