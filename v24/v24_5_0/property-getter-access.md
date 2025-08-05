## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|88,806,223|44404500|
|Getter|51,431,316|25715665|
|Method|95,312,612|47702235|
|DefineProperty (getter)|90,738,210|45370208|
|DefineProperty (getter & enumerable=false)|46,797,894|23400917|
|DefineProperty (getter & configurable=false)|91,913,304|45956667|
|DefineProperty (getter & enumerable=false & configurable=false)|51,100,181|25556989|
|DefineProperty (writable)|90,545,182|45273748|
|DefineProperty (writable & enumerable=false)|95,585,905|47793072|
|DefineProperty (writable & enumerable=false & configurable=false)|94,411,335|47205691|
|DefineProperties (getter)|53,219,784|26609912|
|DefineProperties (getter & enumerable=false)|52,896,827|26502098|
|DefineProperties (getter & enumerable=false & configurable=false)|51,815,186|25907599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:34:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":44404500,"opsSec":88806223.02940586},{"name":"Getter","samples":25715665,"opsSec":51431316.73072028},{"name":"Method","samples":47702235,"opsSec":95312612.2792906},{"name":"DefineProperty (getter)","samples":45370208,"opsSec":90738210.33558317},{"name":"DefineProperty (getter & enumerable=false)","samples":23400917,"opsSec":46797894.36606068},{"name":"DefineProperty (getter & configurable=false)","samples":45956667,"opsSec":91913304.40391599},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25556989,"opsSec":51100181.66635263},{"name":"DefineProperty (writable)","samples":45273748,"opsSec":90545182.20841384},{"name":"DefineProperty (writable & enumerable=false)","samples":47793072,"opsSec":95585905.41758008},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47205691,"opsSec":94411335.17197776},{"name":"DefineProperties (getter)","samples":26609912,"opsSec":53219784.617359385},{"name":"DefineProperties (getter & enumerable=false)","samples":26502098,"opsSec":52896827.711809054},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25907599,"opsSec":51815186.497028604}]}-->
