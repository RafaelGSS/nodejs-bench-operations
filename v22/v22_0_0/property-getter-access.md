## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,909,507|48012355|
|Getter|50,807,881|25410298|
|Method|99,169,998|49585010|
|DefineProperty (getter)|97,940,294|48973821|
|DefineProperty (getter & enumerable=false)|50,844,198|25422133|
|DefineProperty (getter & configurable=false)|97,850,241|48925133|
|DefineProperty (getter & enumerable=false & configurable=false)|51,317,540|25661268|
|DefineProperty (writable)|97,965,622|48994714|
|DefineProperty (writable & enumerable=false)|98,197,618|49111457|
|DefineProperty (writable & enumerable=false & configurable=false)|97,756,992|48885286|
|DefineProperties (getter)|49,508,177|24762423|
|DefineProperties (getter & enumerable=false)|51,352,470|25677021|
|DefineProperties (getter & enumerable=false & configurable=false)|51,202,196|25606223|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:47:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":48012355,"opsSec":95909507.71934585},{"name":"Getter","samples":25410298,"opsSec":50807881.93723979},{"name":"Method","samples":49585010,"opsSec":99169998.77762027},{"name":"DefineProperty (getter)","samples":48973821,"opsSec":97940294.12737338},{"name":"DefineProperty (getter & enumerable=false)","samples":25422133,"opsSec":50844198.78396921},{"name":"DefineProperty (getter & configurable=false)","samples":48925133,"opsSec":97850241.14603876},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25661268,"opsSec":51317540.23745788},{"name":"DefineProperty (writable)","samples":48994714,"opsSec":97965622.54965167},{"name":"DefineProperty (writable & enumerable=false)","samples":49111457,"opsSec":98197618.29352757},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48885286,"opsSec":97756992.77164806},{"name":"DefineProperties (getter)","samples":24762423,"opsSec":49508177.78473614},{"name":"DefineProperties (getter & enumerable=false)","samples":25677021,"opsSec":51352470.5116974},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25606223,"opsSec":51202196.0371841}]}-->
