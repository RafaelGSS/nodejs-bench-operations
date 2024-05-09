## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,283,531|7641766|
|Getter|13,380,021|6690011|
|Method|15,204,229|7602115|
|DefineProperty (getter)|15,372,668|7686335|
|DefineProperty (getter & enumerable=false)|13,279,174|6639588|
|DefineProperty (getter & configurable=false)|15,337,251|7668627|
|DefineProperty (getter & enumerable=false & configurable=false)|13,401,263|6700632|
|DefineProperty (writable)|15,357,440|7678749|
|DefineProperty (writable & enumerable=false)|15,355,988|7677995|
|DefineProperty (writable & enumerable=false & configurable=false)|15,211,084|7605543|
|DefineProperties (getter)|13,366,308|6683155|
|DefineProperties (getter & enumerable=false)|13,394,230|6697116|
|DefineProperties (getter & enumerable=false & configurable=false)|13,356,950|6678476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:59:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15283531.54149968,"samples":7641766},{"name":"Getter","opsSec":13380021.705673814,"samples":6690011},{"name":"Method","opsSec":15204229.726394903,"samples":7602115},{"name":"DefineProperty (getter)","opsSec":15372668.92392036,"samples":7686335},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13279174.247088019,"samples":6639588},{"name":"DefineProperty (getter & configurable=false)","opsSec":15337251.944806203,"samples":7668627},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13401263.437109888,"samples":6700632},{"name":"DefineProperty (writable)","opsSec":15357440.870382415,"samples":7678749},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15355988.986536784,"samples":7677995},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15211084.14423604,"samples":7605543},{"name":"DefineProperties (getter)","opsSec":13366308.663218718,"samples":6683155},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13394230.044632375,"samples":6697116},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13356950.691018973,"samples":6678476}]}-->
