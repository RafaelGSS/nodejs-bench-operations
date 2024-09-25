## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,857,111|7428556|
|Getter|12,545,043|6272522|
|Method|14,241,349|7120675|
|DefineProperty (getter)|14,278,937|7139470|
|DefineProperty (getter & enumerable=false)|12,428,269|6214135|
|DefineProperty (getter & configurable=false)|14,287,767|7143884|
|DefineProperty (getter & enumerable=false & configurable=false)|12,656,506|6328254|
|DefineProperty (writable)|14,655,000|7327501|
|DefineProperty (writable & enumerable=false)|14,696,194|7348098|
|DefineProperty (writable & enumerable=false & configurable=false)|14,379,723|7189862|
|DefineProperties (getter)|12,441,327|6220664|
|DefineProperties (getter & enumerable=false)|12,343,837|6171919|
|DefineProperties (getter & enumerable=false & configurable=false)|12,614,328|6307165|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:59:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14857111.905190496,"samples":7428556},{"name":"Getter","opsSec":12545043.190287968,"samples":6272522},{"name":"Method","opsSec":14241349.381877625,"samples":7120675},{"name":"DefineProperty (getter)","opsSec":14278937.44491845,"samples":7139470},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12428269.208844215,"samples":6214135},{"name":"DefineProperty (getter & configurable=false)","opsSec":14287767.728600204,"samples":7143884},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12656506.44172024,"samples":6328254},{"name":"DefineProperty (writable)","opsSec":14655000.573892098,"samples":7327501},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14696194.618225545,"samples":7348098},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14379723.372550474,"samples":7189862},{"name":"DefineProperties (getter)","opsSec":12441327.151654346,"samples":6220664},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12343837.769434324,"samples":6171919},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12614328.459977016,"samples":6307165}]}-->
