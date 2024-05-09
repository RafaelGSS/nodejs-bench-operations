## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,030,668|7515335|
|Setter|6,822,931|3411466|
|Method|15,241,206|7620604|
|DefineProperty (setter)|15,144,556|7572279|
|DefineProperty (setter & enumerable=false)|6,773,104|3386553|
|DefineProperty (setter & configurable=false)|6,716,254|3358128|
|DefineProperty (setter & enumerable=false & configurable=false)|6,700,258|3350130|
|DefineProperty (writable)|15,192,559|7596280|
|DefineProperty (writable & enumerable=false)|15,227,529|7613859|
|DefineProperty (writable & enumerable=false & configurable=false)|15,195,151|7597576|
|DefineProperties (setter)|15,139,332|7569667|
|DefineProperties (setter & enumerable=false)|6,597,991|3298996|
|DefineProperties (setter & enumerable=false & configurable=false)|6,610,611|3305306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15030668.196331782,"samples":7515335},{"name":"Setter","opsSec":6822931.754374311,"samples":3411466},{"name":"Method","opsSec":15241206.780721953,"samples":7620604},{"name":"DefineProperty (setter)","opsSec":15144556.394729372,"samples":7572279},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6773104.076436658,"samples":3386553},{"name":"DefineProperty (setter & configurable=false)","opsSec":6716254.885085284,"samples":3358128},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6700258.150714816,"samples":3350130},{"name":"DefineProperty (writable)","opsSec":15192559.847944355,"samples":7596280},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15227529.513688661,"samples":7613859},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15195151.301093008,"samples":7597576},{"name":"DefineProperties (setter)","opsSec":15139332.213622523,"samples":7569667},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6597991.762553155,"samples":3298996},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6610611.524062744,"samples":3305306}]}-->
