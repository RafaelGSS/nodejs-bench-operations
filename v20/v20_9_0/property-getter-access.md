## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,306,210|99|
|Getter|94,727,194|97|
|Method|850,738,537|97|
|DefineProperty (getter)|851,055,231|97|
|DefineProperty (getter & enumerable=false)|94,768,870|96|
|DefineProperty (getter & configurable=false)|851,568,377|98|
|DefineProperty (getter & enumerable=false & configurable=false)|94,565,844|96|
|DefineProperty (writable)|851,144,449|100|
|DefineProperty (writable & enumerable=false)|852,411,137|99|
|DefineProperty (writable & enumerable=false & configurable=false)|394,520,868|49|
|DefineProperties (getter)|57,754,757|90|
|DefineProperties (getter & enumerable=false)|94,905,580|97|
|DefineProperties (getter & enumerable=false & configurable=false)|94,783,366|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:45:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":850306209.5957452,"samples":7},{"name":"Getter","opsSec":94727193.67656264,"samples":5},{"name":"Method","opsSec":850738536.657066,"samples":7},{"name":"DefineProperty (getter)","opsSec":851055231.4617889,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":94768870.30061729,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":851568376.9080396,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94565843.93055056,"samples":5},{"name":"DefineProperty (writable)","opsSec":851144449.4760703,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":852411136.7744956,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":394520868.3020317,"samples":6},{"name":"DefineProperties (getter)","opsSec":57754757.226097025,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":94905579.76829767,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":94783365.63300654,"samples":5}]}-->
