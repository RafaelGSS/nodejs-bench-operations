## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|715,526,080|95|
|Getter|54,102,613|94|
|Method|714,713,731|98|
|DefineProperty (getter)|716,595,854|96|
|DefineProperty (getter & enumerable=false)|54,244,059|94|
|DefineProperty (getter & configurable=false)|713,928,127|96|
|DefineProperty (getter & enumerable=false & configurable=false)|54,207,874|96|
|DefineProperty (writable)|716,679,282|98|
|DefineProperty (writable & enumerable=false)|717,528,552|97|
|DefineProperty (writable & enumerable=false & configurable=false)|716,753,230|98|
|DefineProperties (getter)|41,721,946|75|
|DefineProperties (getter & enumerable=false)|31,885,472|92|
|DefineProperties (getter & enumerable=false & configurable=false)|53,898,305|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":715526080.0768024,"samples":6},{"name":"Getter","opsSec":54102613.020405345,"samples":5},{"name":"Method","opsSec":714713731.2147149,"samples":7},{"name":"DefineProperty (getter)","opsSec":716595854.0250132,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":54244058.62235593,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":713928126.5454024,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":54207873.58751701,"samples":5},{"name":"DefineProperty (writable)","opsSec":716679281.9810257,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":717528551.7528819,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":716753229.9766961,"samples":7},{"name":"DefineProperties (getter)","opsSec":41721946.2116753,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":31885472.192773588,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53898304.64153284,"samples":5}]}-->
