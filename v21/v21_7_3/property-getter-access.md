## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,218,910|7609456|
|Getter|12,842,523|6421262|
|Method|14,889,576|7444789|
|DefineProperty (getter)|15,381,458|7690730|
|DefineProperty (getter & enumerable=false)|13,263,843|6631922|
|DefineProperty (getter & configurable=false)|15,384,124|7692063|
|DefineProperty (getter & enumerable=false & configurable=false)|13,360,113|6680057|
|DefineProperty (writable)|15,252,693|7626347|
|DefineProperty (writable & enumerable=false)|15,321,930|7660966|
|DefineProperty (writable & enumerable=false & configurable=false)|15,341,559|7670780|
|DefineProperties (getter)|13,485,303|6742652|
|DefineProperties (getter & enumerable=false)|13,368,058|6684030|
|DefineProperties (getter & enumerable=false & configurable=false)|13,429,839|6714920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:56:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15218910.265025843,"samples":7609456},{"name":"Getter","opsSec":12842523.614712387,"samples":6421262},{"name":"Method","opsSec":14889576.33235356,"samples":7444789},{"name":"DefineProperty (getter)","opsSec":15381458.246529507,"samples":7690730},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13263843.840833433,"samples":6631922},{"name":"DefineProperty (getter & configurable=false)","opsSec":15384124.861546503,"samples":7692063},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13360113.278520199,"samples":6680057},{"name":"DefineProperty (writable)","opsSec":15252693.023743415,"samples":7626347},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15321930.651841328,"samples":7660966},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15341559.324611282,"samples":7670780},{"name":"DefineProperties (getter)","opsSec":13485303.568644399,"samples":6742652},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13368058.075088859,"samples":6684030},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13429839.785034548,"samples":6714920}]}-->
