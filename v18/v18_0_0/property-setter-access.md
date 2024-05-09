## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,556,172|9925739|
|Setter|6,215,930|3107966|
|Method|19,055,962|9527982|
|DefineProperty (setter)|19,939,157|9969579|
|DefineProperty (setter & enumerable=false)|6,325,196|3162599|
|DefineProperty (setter & configurable=false)|6,339,420|3169711|
|DefineProperty (setter & enumerable=false & configurable=false)|6,312,251|3156126|
|DefineProperty (writable)|19,901,017|9950509|
|DefineProperty (writable & enumerable=false)|19,883,715|9941858|
|DefineProperty (writable & enumerable=false & configurable=false)|18,430,393|9215197|
|DefineProperties (setter)|19,886,790|9943396|
|DefineProperties (setter & enumerable=false)|6,215,312|3107657|
|DefineProperties (setter & enumerable=false & configurable=false)|6,139,323|3069662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:06:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19556172.091419015,"samples":9925739},{"name":"Setter","opsSec":6215930.144544473,"samples":3107966},{"name":"Method","opsSec":19055962.15542206,"samples":9527982},{"name":"DefineProperty (setter)","opsSec":19939157.86689176,"samples":9969579},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6325196.80261272,"samples":3162599},{"name":"DefineProperty (setter & configurable=false)","opsSec":6339420.165117245,"samples":3169711},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6312251.268590423,"samples":3156126},{"name":"DefineProperty (writable)","opsSec":19901017.686845023,"samples":9950509},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19883715.734523755,"samples":9941858},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18430393.086017188,"samples":9215197},{"name":"DefineProperties (setter)","opsSec":19886790.131896183,"samples":9943396},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6215312.512226637,"samples":3107657},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6139323.847772198,"samples":3069662}]}-->
