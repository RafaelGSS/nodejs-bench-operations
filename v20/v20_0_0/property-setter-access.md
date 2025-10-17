## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,138,697|51088917|
|Setter|11,119,298|5559652|
|Method|97,899,900|48952180|
|DefineProperty (setter)|104,265,943|52140234|
|DefineProperty (setter & enumerable=false)|11,100,308|5550934|
|DefineProperty (setter & configurable=false)|11,107,581|5553793|
|DefineProperty (setter & enumerable=false & configurable=false)|11,242,832|5621420|
|DefineProperty (writable)|105,030,092|52532839|
|DefineProperty (writable & enumerable=false)|100,974,613|50487327|
|DefineProperty (writable & enumerable=false & configurable=false)|103,825,626|51931592|
|DefineProperties (setter)|96,772,307|48386161|
|DefineProperties (setter & enumerable=false)|11,242,068|5622206|
|DefineProperties (setter & enumerable=false & configurable=false)|11,334,548|5667608|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:50:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":51088917,"opsSec":102138697.92367138},{"name":"Setter","samples":5559652,"opsSec":11119298.373635024},{"name":"Method","samples":48952180,"opsSec":97899900.2679432},{"name":"DefineProperty (setter)","samples":52140234,"opsSec":104265943.33702938},{"name":"DefineProperty (setter & enumerable=false)","samples":5550934,"opsSec":11100308.939408842},{"name":"DefineProperty (setter & configurable=false)","samples":5553793,"opsSec":11107581.867979545},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5621420,"opsSec":11242832.13001751},{"name":"DefineProperty (writable)","samples":52532839,"opsSec":105030092.75427394},{"name":"DefineProperty (writable & enumerable=false)","samples":50487327,"opsSec":100974613.81210369},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51931592,"opsSec":103825626.94831273},{"name":"DefineProperties (setter)","samples":48386161,"opsSec":96772307.48415388},{"name":"DefineProperties (setter & enumerable=false)","samples":5622206,"opsSec":11242068.972952934},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5667608,"opsSec":11334548.145754155}]}-->
