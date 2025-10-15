## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,656,532|50397038|
|Getter|53,583,007|26791522|
|Method|100,945,730|50473685|
|DefineProperty (getter)|94,129,053|47078598|
|DefineProperty (getter & enumerable=false)|53,308,561|26706136|
|DefineProperty (getter & configurable=false)|100,704,928|50361967|
|DefineProperty (getter & enumerable=false & configurable=false)|53,609,802|26804907|
|DefineProperty (writable)|99,372,255|49700135|
|DefineProperty (writable & enumerable=false)|101,000,671|50503905|
|DefineProperty (writable & enumerable=false & configurable=false)|100,956,581|50480030|
|DefineProperties (getter)|48,762,744|24384543|
|DefineProperties (getter & enumerable=false)|47,027,590|23514503|
|DefineProperties (getter & enumerable=false & configurable=false)|47,903,621|23951813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50397038,"opsSec":100656532.47201216},{"name":"Getter","samples":26791522,"opsSec":53583007.99221862},{"name":"Method","samples":50473685,"opsSec":100945730.84322257},{"name":"DefineProperty (getter)","samples":47078598,"opsSec":94129053.67204934},{"name":"DefineProperty (getter & enumerable=false)","samples":26706136,"opsSec":53308561.04741923},{"name":"DefineProperty (getter & configurable=false)","samples":50361967,"opsSec":100704928.56306186},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26804907,"opsSec":53609802.52750226},{"name":"DefineProperty (writable)","samples":49700135,"opsSec":99372255.17256626},{"name":"DefineProperty (writable & enumerable=false)","samples":50503905,"opsSec":101000671.67652859},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50480030,"opsSec":100956581.2381237},{"name":"DefineProperties (getter)","samples":24384543,"opsSec":48762744.50260293},{"name":"DefineProperties (getter & enumerable=false)","samples":23514503,"opsSec":47027590.845736265},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23951813,"opsSec":47903621.30544512}]}-->
