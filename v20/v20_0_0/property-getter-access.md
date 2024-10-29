## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|151,640,867|75820458|
|Getter|53,823,658|26911835|
|Method|99,393,345|49696697|
|DefineProperty (getter)|101,179,251|50589635|
|DefineProperty (getter & enumerable=false)|47,992,262|24005986|
|DefineProperty (getter & configurable=false)|101,669,557|50836779|
|DefineProperty (getter & enumerable=false & configurable=false)|49,568,157|24793468|
|DefineProperty (writable)|102,306,795|51167669|
|DefineProperty (writable & enumerable=false)|103,438,432|51719227|
|DefineProperty (writable & enumerable=false & configurable=false)|103,881,983|51942436|
|DefineProperties (getter)|53,481,800|26740905|
|DefineProperties (getter & enumerable=false)|53,291,412|26645724|
|DefineProperties (getter & enumerable=false & configurable=false)|53,357,477|26678746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:52:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":151640867.4749224,"samples":75820458},{"name":"Getter","opsSec":53823658.051147915,"samples":26911835},{"name":"Method","opsSec":99393345.694834,"samples":49696697},{"name":"DefineProperty (getter)","opsSec":101179251.58537622,"samples":50589635},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47992262.53762104,"samples":24005986},{"name":"DefineProperty (getter & configurable=false)","opsSec":101669557.50625125,"samples":50836779},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49568157.6982739,"samples":24793468},{"name":"DefineProperty (writable)","opsSec":102306795.83625682,"samples":51167669},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103438432.69168288,"samples":51719227},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":103881983.87308437,"samples":51942436},{"name":"DefineProperties (getter)","opsSec":53481800.15934878,"samples":26740905},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53291412.50791927,"samples":26645724},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53357477.16662135,"samples":26678746}]}-->
