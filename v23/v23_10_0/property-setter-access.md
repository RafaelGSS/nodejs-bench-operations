## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,955,709|47977865|
|Setter|11,114,214|5629656|
|Method|92,019,659|46009851|
|DefineProperty (setter)|95,551,439|47775734|
|DefineProperty (setter & enumerable=false)|11,375,883|5688086|
|DefineProperty (setter & configurable=false)|11,267,203|5633605|
|DefineProperty (setter & enumerable=false & configurable=false)|11,231,801|5615904|
|DefineProperty (writable)|89,962,594|45392283|
|DefineProperty (writable & enumerable=false)|94,797,332|47398705|
|DefineProperty (writable & enumerable=false & configurable=false)|95,539,961|47780750|
|DefineProperties (setter)|94,287,324|47144298|
|DefineProperties (setter & enumerable=false)|11,157,817|5579012|
|DefineProperties (setter & enumerable=false & configurable=false)|11,188,580|5594294|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:34:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47977865,"opsSec":95955709.65738955},{"name":"Setter","samples":5629656,"opsSec":11114214.836121382},{"name":"Method","samples":46009851,"opsSec":92019659.48691732},{"name":"DefineProperty (setter)","samples":47775734,"opsSec":95551439.52567102},{"name":"DefineProperty (setter & enumerable=false)","samples":5688086,"opsSec":11375883.32558473},{"name":"DefineProperty (setter & configurable=false)","samples":5633605,"opsSec":11267203.127006091},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5615904,"opsSec":11231801.687727451},{"name":"DefineProperty (writable)","samples":45392283,"opsSec":89962594.50703181},{"name":"DefineProperty (writable & enumerable=false)","samples":47398705,"opsSec":94797332.64537656},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47780750,"opsSec":95539961.66212282},{"name":"DefineProperties (setter)","samples":47144298,"opsSec":94287324.8182868},{"name":"DefineProperties (setter & enumerable=false)","samples":5579012,"opsSec":11157817.513429096},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5594294,"opsSec":11188580.70504538}]}-->
