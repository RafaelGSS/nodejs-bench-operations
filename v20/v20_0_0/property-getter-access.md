## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|595,437,299|94|
|Getter|68,298,903|95|
|Method|599,591,407|95|
|DefineProperty (getter)|599,563,424|96|
|DefineProperty (getter & enumerable=false)|68,181,487|97|
|DefineProperty (getter & configurable=false)|598,138,961|93|
|DefineProperty (getter & enumerable=false & configurable=false)|68,329,347|96|
|DefineProperty (writable)|596,672,256|98|
|DefineProperty (writable & enumerable=false)|598,798,495|96|
|DefineProperty (writable & enumerable=false & configurable=false)|599,514,420|94|
|DefineProperties (getter)|68,400,776|97|
|DefineProperties (getter & enumerable=false)|68,057,708|95|
|DefineProperties (getter & enumerable=false & configurable=false)|46,057,169|66|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":595437298.9316337,"samples":6},{"name":"Getter","opsSec":68298903.03198567,"samples":5},{"name":"Method","opsSec":599591407.0450224,"samples":7},{"name":"DefineProperty (getter)","opsSec":599563424.0893775,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":68181486.85150126,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":598138961.4099581,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":68329347.35729262,"samples":7},{"name":"DefineProperty (writable)","opsSec":596672255.6862769,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":598798495.2256274,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":599514420.4229473,"samples":6},{"name":"DefineProperties (getter)","opsSec":68400776.34135513,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68057708.28944832,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":46057169.21095708,"samples":5}]}-->
