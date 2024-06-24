## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,266,537|8133269|
|Getter|13,853,160|6926581|
|Method|16,008,203|8004102|
|DefineProperty (getter)|16,261,079|8130540|
|DefineProperty (getter & enumerable=false)|14,109,035|7054518|
|DefineProperty (getter & configurable=false)|16,297,382|8148692|
|DefineProperty (getter & enumerable=false & configurable=false)|14,042,582|7021292|
|DefineProperty (writable)|16,228,616|8114309|
|DefineProperty (writable & enumerable=false)|16,286,009|8143005|
|DefineProperty (writable & enumerable=false & configurable=false)|16,278,742|8139372|
|DefineProperties (getter)|13,596,955|6798478|
|DefineProperties (getter & enumerable=false)|13,637,369|6818685|
|DefineProperties (getter & enumerable=false & configurable=false)|13,640,816|6820409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:41:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16266537.316842366,"samples":8133269},{"name":"Getter","opsSec":13853160.448494794,"samples":6926581},{"name":"Method","opsSec":16008203.071585521,"samples":8004102},{"name":"DefineProperty (getter)","opsSec":16261079.90247419,"samples":8130540},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14109035.97178664,"samples":7054518},{"name":"DefineProperty (getter & configurable=false)","opsSec":16297382.109421926,"samples":8148692},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14042582.399194617,"samples":7021292},{"name":"DefineProperty (writable)","opsSec":16228616.506920254,"samples":8114309},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16286009.088555045,"samples":8143005},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16278742.371978343,"samples":8139372},{"name":"DefineProperties (getter)","opsSec":13596955.102441777,"samples":6798478},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13637369.236490034,"samples":6818685},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13640816.963372394,"samples":6820409}]}-->
