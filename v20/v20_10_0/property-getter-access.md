## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|847,173,302|98|
|Getter|88,217,596|96|
|Method|796,112,379|96|
|DefineProperty (getter)|843,051,221|96|
|DefineProperty (getter & enumerable=false)|87,154,792|94|
|DefineProperty (getter & configurable=false)|848,256,894|99|
|DefineProperty (getter & enumerable=false & configurable=false)|88,388,479|97|
|DefineProperty (writable)|848,396,512|98|
|DefineProperty (writable & enumerable=false)|743,654,753|84|
|DefineProperty (writable & enumerable=false & configurable=false)|128,843,772|88|
|DefineProperties (getter)|55,387,683|94|
|DefineProperties (getter & enumerable=false)|88,134,566|96|
|DefineProperties (getter & enumerable=false & configurable=false)|88,417,696|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":847173302.1381549,"samples":7},{"name":"Getter","opsSec":88217595.63545622,"samples":6},{"name":"Method","opsSec":796112378.8869094,"samples":7},{"name":"DefineProperty (getter)","opsSec":843051221.0548661,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":87154792.4198294,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":848256893.5270447,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":88388479.1977155,"samples":7},{"name":"DefineProperty (writable)","opsSec":848396512.4156331,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":743654753.3378674,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":128843772.16666722,"samples":5},{"name":"DefineProperties (getter)","opsSec":55387682.60041157,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":88134566.10508324,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":88417695.54598516,"samples":6}]}-->
