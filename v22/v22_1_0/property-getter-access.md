## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,980,160|7990081|
|Getter|13,895,896|6947949|
|Method|15,873,831|7936916|
|DefineProperty (getter)|15,987,066|7993534|
|DefineProperty (getter & enumerable=false)|13,235,903|6617952|
|DefineProperty (getter & configurable=false)|16,033,995|8016998|
|DefineProperty (getter & enumerable=false & configurable=false)|13,184,974|6592488|
|DefineProperty (writable)|16,078,000|8039001|
|DefineProperty (writable & enumerable=false)|16,063,614|8031808|
|DefineProperty (writable & enumerable=false & configurable=false)|16,062,475|8031238|
|DefineProperties (getter)|13,191,326|6595664|
|DefineProperties (getter & enumerable=false)|13,210,579|6605290|
|DefineProperties (getter & enumerable=false & configurable=false)|13,174,019|6587010|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:19:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15980160.306121211,"samples":7990081},{"name":"Getter","opsSec":13895896.916076377,"samples":6947949},{"name":"Method","opsSec":15873831.809546756,"samples":7936916},{"name":"DefineProperty (getter)","opsSec":15987066.017658975,"samples":7993534},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13235903.0735118,"samples":6617952},{"name":"DefineProperty (getter & configurable=false)","opsSec":16033995.936002705,"samples":8016998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13184974.36509294,"samples":6592488},{"name":"DefineProperty (writable)","opsSec":16078000.649606353,"samples":8039001},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16063614.746848516,"samples":8031808},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16062475.389910892,"samples":8031238},{"name":"DefineProperties (getter)","opsSec":13191326.496267164,"samples":6595664},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13210579.577186145,"samples":6605290},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13174019.367533173,"samples":6587010}]}-->
