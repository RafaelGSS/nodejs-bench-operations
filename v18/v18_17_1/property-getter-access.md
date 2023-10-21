## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,704,176|99|
|Getter|53,256,969|97|
|Method|708,168,472|98|
|DefineProperty (getter)|706,345,582|96|
|DefineProperty (getter & enumerable=false)|52,857,148|93|
|DefineProperty (getter & configurable=false)|709,699,629|98|
|DefineProperty (getter & enumerable=false & configurable=false)|53,236,417|96|
|DefineProperty (writable)|707,975,729|96|
|DefineProperty (writable & enumerable=false)|659,693,435|89|
|DefineProperty (writable & enumerable=false & configurable=false)|81,267,582|81|
|DefineProperties (getter)|33,227,988|88|
|DefineProperties (getter & enumerable=false)|52,770,954|97|
|DefineProperties (getter & enumerable=false & configurable=false)|53,210,154|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":709704176.3227296,"samples":7},{"name":"Getter","opsSec":53256969.39796021,"samples":6},{"name":"Method","opsSec":708168471.9267535,"samples":12},{"name":"DefineProperty (getter)","opsSec":706345581.8188125,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52857147.542358495,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":709699628.8134824,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53236417.45400242,"samples":6},{"name":"DefineProperty (writable)","opsSec":707975729.0565277,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":659693434.8836887,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81267582.4592105,"samples":5},{"name":"DefineProperties (getter)","opsSec":33227988.42516913,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52770953.95493766,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53210153.85194033,"samples":6}]}-->
