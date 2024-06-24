## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,094,899|8547450|
|Getter|13,870,455|6935228|
|Method|16,906,133|8453067|
|DefineProperty (getter)|17,066,833|8533417|
|DefineProperty (getter & enumerable=false)|14,113,784|7056893|
|DefineProperty (getter & configurable=false)|16,522,841|8261421|
|DefineProperty (getter & enumerable=false & configurable=false)|14,068,101|7034051|
|DefineProperty (writable)|16,707,842|8353922|
|DefineProperty (writable & enumerable=false)|16,973,288|8486645|
|DefineProperty (writable & enumerable=false & configurable=false)|16,302,370|8151186|
|DefineProperties (getter)|13,948,555|6974278|
|DefineProperties (getter & enumerable=false)|13,690,806|6845404|
|DefineProperties (getter & enumerable=false & configurable=false)|13,816,882|6908442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:33:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17094899.3850088,"samples":8547450},{"name":"Getter","opsSec":13870455.073453005,"samples":6935228},{"name":"Method","opsSec":16906133.62690497,"samples":8453067},{"name":"DefineProperty (getter)","opsSec":17066833.136280537,"samples":8533417},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14113784.911531363,"samples":7056893},{"name":"DefineProperty (getter & configurable=false)","opsSec":16522841.803832557,"samples":8261421},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14068101.870212173,"samples":7034051},{"name":"DefineProperty (writable)","opsSec":16707842.97525487,"samples":8353922},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16973288.344848745,"samples":8486645},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16302370.741470171,"samples":8151186},{"name":"DefineProperties (getter)","opsSec":13948555.753750093,"samples":6974278},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13690806.575329239,"samples":6845404},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13816882.531094963,"samples":6908442}]}-->
