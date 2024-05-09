## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,834,233|9917117|
|Getter|16,058,072|8029037|
|Method|19,759,030|9879516|
|DefineProperty (getter)|19,983,779|9991890|
|DefineProperty (getter & enumerable=false)|16,367,314|8183658|
|DefineProperty (getter & configurable=false)|19,872,039|9936020|
|DefineProperty (getter & enumerable=false & configurable=false)|16,322,122|8161062|
|DefineProperty (writable)|19,844,478|9922240|
|DefineProperty (writable & enumerable=false)|19,874,833|9937417|
|DefineProperty (writable & enumerable=false & configurable=false)|19,914,229|9957115|
|DefineProperties (getter)|16,407,781|8203891|
|DefineProperties (getter & enumerable=false)|16,348,552|8174277|
|DefineProperties (getter & enumerable=false & configurable=false)|16,275,564|8137783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:53:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19834233.365273148,"samples":9917117},{"name":"Getter","opsSec":16058072.6511732,"samples":8029037},{"name":"Method","opsSec":19759030.933029506,"samples":9879516},{"name":"DefineProperty (getter)","opsSec":19983779.200691164,"samples":9991890},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16367314.264981095,"samples":8183658},{"name":"DefineProperty (getter & configurable=false)","opsSec":19872039.324482586,"samples":9936020},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16322122.628819743,"samples":8161062},{"name":"DefineProperty (writable)","opsSec":19844478.13498228,"samples":9922240},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19874833.28493756,"samples":9937417},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19914229.4025109,"samples":9957115},{"name":"DefineProperties (getter)","opsSec":16407781.015876867,"samples":8203891},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16348552.888324909,"samples":8174277},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16275564.567886017,"samples":8137783}]}-->
