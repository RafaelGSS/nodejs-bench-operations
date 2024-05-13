## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,088,357|8044179|
|Getter|13,927,130|6963566|
|Method|15,918,809|7959405|
|DefineProperty (getter)|15,901,982|7950992|
|DefineProperty (getter & enumerable=false)|13,913,962|6956982|
|DefineProperty (getter & configurable=false)|16,089,153|8044577|
|DefineProperty (getter & enumerable=false & configurable=false)|13,938,043|6969022|
|DefineProperty (writable)|16,061,869|8030935|
|DefineProperty (writable & enumerable=false)|16,095,558|8047780|
|DefineProperty (writable & enumerable=false & configurable=false)|16,115,940|8057971|
|DefineProperties (getter)|13,945,831|6972916|
|DefineProperties (getter & enumerable=false)|13,971,560|6985781|
|DefineProperties (getter & enumerable=false & configurable=false)|13,986,045|6993023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:17:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16088357.034707997,"samples":8044179},{"name":"Getter","opsSec":13927130.579502728,"samples":6963566},{"name":"Method","opsSec":15918809.522586646,"samples":7959405},{"name":"DefineProperty (getter)","opsSec":15901982.282496763,"samples":7950992},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13913962.747887697,"samples":6956982},{"name":"DefineProperty (getter & configurable=false)","opsSec":16089153.420651091,"samples":8044577},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13938043.804859005,"samples":6969022},{"name":"DefineProperty (writable)","opsSec":16061869.518085668,"samples":8030935},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16095558.647999667,"samples":8047780},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16115940.517693192,"samples":8057971},{"name":"DefineProperties (getter)","opsSec":13945831.916380178,"samples":6972916},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13971560.938181952,"samples":6985781},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13986045.804286268,"samples":6993023}]}-->
