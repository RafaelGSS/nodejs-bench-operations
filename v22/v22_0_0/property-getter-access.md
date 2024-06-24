## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,085,140|8042571|
|Getter|13,879,805|6939903|
|Method|15,992,637|7996319|
|DefineProperty (getter)|16,016,061|8008031|
|DefineProperty (getter & enumerable=false)|13,167,784|6583893|
|DefineProperty (getter & configurable=false)|16,248,295|8124148|
|DefineProperty (getter & enumerable=false & configurable=false)|13,549,661|6774831|
|DefineProperty (writable)|16,151,466|8075734|
|DefineProperty (writable & enumerable=false)|16,043,768|8021885|
|DefineProperty (writable & enumerable=false & configurable=false)|16,148,930|8074466|
|DefineProperties (getter)|13,963,492|6981747|
|DefineProperties (getter & enumerable=false)|14,014,638|7007320|
|DefineProperties (getter & enumerable=false & configurable=false)|14,042,224|7021113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16085140.230647845,"samples":8042571},{"name":"Getter","opsSec":13879805.55581926,"samples":6939903},{"name":"Method","opsSec":15992637.616128977,"samples":7996319},{"name":"DefineProperty (getter)","opsSec":16016061.32735829,"samples":8008031},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13167784.44616498,"samples":6583893},{"name":"DefineProperty (getter & configurable=false)","opsSec":16248295.317610262,"samples":8124148},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13549661.756154213,"samples":6774831},{"name":"DefineProperty (writable)","opsSec":16151466.804809736,"samples":8075734},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16043768.716464682,"samples":8021885},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16148930.611268343,"samples":8074466},{"name":"DefineProperties (getter)","opsSec":13963492.71530764,"samples":6981747},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14014638.262021929,"samples":7007320},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14042224.736487875,"samples":7021113}]}-->
