## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,148,472|8074237|
|Getter|13,928,185|6964093|
|Method|15,994,873|7997437|
|DefineProperty (getter)|16,009,189|8004595|
|DefineProperty (getter & enumerable=false)|13,991,673|6995837|
|DefineProperty (getter & configurable=false)|16,139,549|8069775|
|DefineProperty (getter & enumerable=false & configurable=false)|13,895,404|6947703|
|DefineProperty (writable)|16,137,285|8068643|
|DefineProperty (writable & enumerable=false)|16,094,068|8047035|
|DefineProperty (writable & enumerable=false & configurable=false)|16,127,547|8063774|
|DefineProperties (getter)|13,952,709|6976355|
|DefineProperties (getter & enumerable=false)|13,888,495|6944248|
|DefineProperties (getter & enumerable=false & configurable=false)|13,946,159|6973080|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:01:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16148472.99877489,"samples":8074237},{"name":"Getter","opsSec":13928185.164361762,"samples":6964093},{"name":"Method","opsSec":15994873.96805016,"samples":7997437},{"name":"DefineProperty (getter)","opsSec":16009189.487724634,"samples":8004595},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13991673.216535974,"samples":6995837},{"name":"DefineProperty (getter & configurable=false)","opsSec":16139549.644840071,"samples":8069775},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13895404.554870158,"samples":6947703},{"name":"DefineProperty (writable)","opsSec":16137285.741715632,"samples":8068643},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16094068.22942882,"samples":8047035},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16127547.322661558,"samples":8063774},{"name":"DefineProperties (getter)","opsSec":13952709.525809333,"samples":6976355},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13888495.333441127,"samples":6944248},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13946159.91661809,"samples":6973080}]}-->
