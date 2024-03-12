## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|798,794,094|95|
|Getter|92,245,506|95|
|Method|822,255,608|96|
|DefineProperty (getter)|820,778,422|97|
|DefineProperty (getter & enumerable=false)|91,804,656|98|
|DefineProperty (getter & configurable=false)|822,353,337|96|
|DefineProperty (getter & enumerable=false & configurable=false)|92,180,113|97|
|DefineProperty (writable)|822,925,828|97|
|DefineProperty (writable & enumerable=false)|822,786,970|93|
|DefineProperty (writable & enumerable=false & configurable=false)|823,216,480|98|
|DefineProperties (getter)|92,427,336|97|
|DefineProperties (getter & enumerable=false)|92,379,346|99|
|DefineProperties (getter & enumerable=false & configurable=false)|64,343,862|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":798794094.334074,"samples":6},{"name":"Getter","opsSec":92245505.86002871,"samples":6},{"name":"Method","opsSec":822255608.488657,"samples":6},{"name":"DefineProperty (getter)","opsSec":820778421.5567359,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91804656.02632199,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":822353337.1830765,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92180112.70444079,"samples":6},{"name":"DefineProperty (writable)","opsSec":822925828.3625282,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":822786970.231401,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823216480.3688585,"samples":6},{"name":"DefineProperties (getter)","opsSec":92427336.07400917,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":92379345.57053858,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64343862.46504556,"samples":5}]}-->
