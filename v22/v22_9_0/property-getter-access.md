## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,922,806|7461404|
|Getter|12,436,136|6218069|
|Method|14,489,532|7244863|
|DefineProperty (getter)|14,526,309|7263155|
|DefineProperty (getter & enumerable=false)|12,344,798|6172400|
|DefineProperty (getter & configurable=false)|14,707,673|7353837|
|DefineProperty (getter & enumerable=false & configurable=false)|12,552,200|6276104|
|DefineProperty (writable)|14,533,995|7266998|
|DefineProperty (writable & enumerable=false)|14,690,064|7345033|
|DefineProperty (writable & enumerable=false & configurable=false)|14,779,128|7389565|
|DefineProperties (getter)|12,530,857|6265429|
|DefineProperties (getter & enumerable=false)|12,684,299|6342150|
|DefineProperties (getter & enumerable=false & configurable=false)|12,721,558|6360780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:19:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14922806.776145719,"samples":7461404},{"name":"Getter","opsSec":12436136.557601852,"samples":6218069},{"name":"Method","opsSec":14489532.101126479,"samples":7244863},{"name":"DefineProperty (getter)","opsSec":14526309.244655127,"samples":7263155},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12344798.691348681,"samples":6172400},{"name":"DefineProperty (getter & configurable=false)","opsSec":14707673.823006822,"samples":7353837},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12552200.51857617,"samples":6276104},{"name":"DefineProperty (writable)","opsSec":14533995.157180909,"samples":7266998},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14690064.824593902,"samples":7345033},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14779128.285163313,"samples":7389565},{"name":"DefineProperties (getter)","opsSec":12530857.774502654,"samples":6265429},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12684299.56825985,"samples":6342150},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12721558.422496602,"samples":6360780}]}-->
