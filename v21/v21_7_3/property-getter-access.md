## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,232,837|7616419|
|Getter|13,318,811|6659406|
|Method|15,261,160|7630581|
|DefineProperty (getter)|15,259,185|7629593|
|DefineProperty (getter & enumerable=false)|13,319,534|6659768|
|DefineProperty (getter & configurable=false)|15,311,462|7655732|
|DefineProperty (getter & enumerable=false & configurable=false)|13,330,883|6665442|
|DefineProperty (writable)|15,296,377|7648189|
|DefineProperty (writable & enumerable=false)|15,291,267|7645634|
|DefineProperty (writable & enumerable=false & configurable=false)|15,277,680|7638841|
|DefineProperties (getter)|13,292,623|6646312|
|DefineProperties (getter & enumerable=false)|13,358,876|6679439|
|DefineProperties (getter & enumerable=false & configurable=false)|13,344,769|6672385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:18:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15232837.086022899,"samples":7616419},{"name":"Getter","opsSec":13318811.413997708,"samples":6659406},{"name":"Method","opsSec":15261160.626592072,"samples":7630581},{"name":"DefineProperty (getter)","opsSec":15259185.755876593,"samples":7629593},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13319534.614828017,"samples":6659768},{"name":"DefineProperty (getter & configurable=false)","opsSec":15311462.805760197,"samples":7655732},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13330883.866616916,"samples":6665442},{"name":"DefineProperty (writable)","opsSec":15296377.541039625,"samples":7648189},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15291267.357728835,"samples":7645634},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15277680.074972752,"samples":7638841},{"name":"DefineProperties (getter)","opsSec":13292623.733904678,"samples":6646312},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13358876.53069882,"samples":6679439},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13344769.306003794,"samples":6672385}]}-->
