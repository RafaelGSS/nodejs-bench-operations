## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,085,475|8042738|
|Getter|13,669,171|6834586|
|Method|16,118,258|8059130|
|DefineProperty (getter)|16,166,774|8083388|
|DefineProperty (getter & enumerable=false)|13,848,954|6924478|
|DefineProperty (getter & configurable=false)|16,125,653|8062827|
|DefineProperty (getter & enumerable=false & configurable=false)|13,787,584|6893793|
|DefineProperty (writable)|16,115,595|8057798|
|DefineProperty (writable & enumerable=false)|16,096,185|8048093|
|DefineProperty (writable & enumerable=false & configurable=false)|16,179,845|8089923|
|DefineProperties (getter)|13,924,370|6962186|
|DefineProperties (getter & enumerable=false)|13,917,121|6958561|
|DefineProperties (getter & enumerable=false & configurable=false)|13,743,446|6871724|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:51:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16085475.432408722,"samples":8042738},{"name":"Getter","opsSec":13669171.296059372,"samples":6834586},{"name":"Method","opsSec":16118258.639616117,"samples":8059130},{"name":"DefineProperty (getter)","opsSec":16166774.81282648,"samples":8083388},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13848954.600016417,"samples":6924478},{"name":"DefineProperty (getter & configurable=false)","opsSec":16125653.938485513,"samples":8062827},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13787584.26434982,"samples":6893793},{"name":"DefineProperty (writable)","opsSec":16115595.86167873,"samples":8057798},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16096185.82346903,"samples":8048093},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16179845.24391516,"samples":8089923},{"name":"DefineProperties (getter)","opsSec":13924370.71854613,"samples":6962186},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13917121.50228495,"samples":6958561},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13743446.872817583,"samples":6871724}]}-->
