## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,424,404|49712212|
|Setter|11,644,288|5822147|
|Method|89,598,010|44799012|
|DefineProperty (setter)|98,141,055|49077339|
|DefineProperty (setter & enumerable=false)|11,532,394|5766270|
|DefineProperty (setter & configurable=false)|11,461,213|5730610|
|DefineProperty (setter & enumerable=false & configurable=false)|11,616,825|5808418|
|DefineProperty (writable)|100,827,997|50414010|
|DefineProperty (writable & enumerable=false)|101,053,833|50526925|
|DefineProperty (writable & enumerable=false & configurable=false)|100,349,180|50175667|
|DefineProperties (setter)|99,696,106|50267877|
|DefineProperties (setter & enumerable=false)|11,760,366|5880583|
|DefineProperties (setter & enumerable=false & configurable=false)|11,894,983|5947492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:51:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":49712212,"opsSec":99424404.51281671},{"name":"Setter","samples":5822147,"opsSec":11644288.014835961},{"name":"Method","samples":44799012,"opsSec":89598010.9186904},{"name":"DefineProperty (setter)","samples":49077339,"opsSec":98141055.43265961},{"name":"DefineProperty (setter & enumerable=false)","samples":5766270,"opsSec":11532394.553439893},{"name":"DefineProperty (setter & configurable=false)","samples":5730610,"opsSec":11461213.467108322},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5808418,"opsSec":11616825.266053453},{"name":"DefineProperty (writable)","samples":50414010,"opsSec":100827997.41452856},{"name":"DefineProperty (writable & enumerable=false)","samples":50526925,"opsSec":101053833.42717132},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50175667,"opsSec":100349180.30589227},{"name":"DefineProperties (setter)","samples":50267877,"opsSec":99696106.21533482},{"name":"DefineProperties (setter & enumerable=false)","samples":5880583,"opsSec":11760366.153977135},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5947492,"opsSec":11894983.167351179}]}-->
