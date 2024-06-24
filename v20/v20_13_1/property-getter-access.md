## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,929,350|9964676|
|Getter|16,050,907|8025455|
|Method|19,880,117|9940059|
|DefineProperty (getter)|19,952,732|9976367|
|DefineProperty (getter & enumerable=false)|16,100,765|8050383|
|DefineProperty (getter & configurable=false)|20,061,462|10030732|
|DefineProperty (getter & enumerable=false & configurable=false)|16,274,674|8137338|
|DefineProperty (writable)|20,040,546|10020274|
|DefineProperty (writable & enumerable=false)|19,982,836|9991419|
|DefineProperty (writable & enumerable=false & configurable=false)|20,037,646|10018824|
|DefineProperties (getter)|16,213,601|8106801|
|DefineProperties (getter & enumerable=false)|16,303,761|8151881|
|DefineProperties (getter & enumerable=false & configurable=false)|16,277,965|8138983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:34:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19929350.2063578,"samples":9964676},{"name":"Getter","opsSec":16050907.560294157,"samples":8025455},{"name":"Method","opsSec":19880117.403566334,"samples":9940059},{"name":"DefineProperty (getter)","opsSec":19952732.36380208,"samples":9976367},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16100765.871207537,"samples":8050383},{"name":"DefineProperty (getter & configurable=false)","opsSec":20061462.394931827,"samples":10030732},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16274674.242294088,"samples":8137338},{"name":"DefineProperty (writable)","opsSec":20040546.79724016,"samples":10020274},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19982836.881126214,"samples":9991419},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20037646.5171428,"samples":10018824},{"name":"DefineProperties (getter)","opsSec":16213601.027041338,"samples":8106801},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16303761.901989728,"samples":8151881},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16277965.544192176,"samples":8138983}]}-->
