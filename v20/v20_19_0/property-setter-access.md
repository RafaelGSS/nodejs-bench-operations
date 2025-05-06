## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,475,075|51260889|
|Setter|11,524,527|5762266|
|Method|101,169,983|50599611|
|DefineProperty (setter)|102,645,019|51322536|
|DefineProperty (setter & enumerable=false)|11,543,790|5772112|
|DefineProperty (setter & configurable=false)|11,541,415|5770752|
|DefineProperty (setter & enumerable=false & configurable=false)|11,963,494|5982276|
|DefineProperty (writable)|101,798,658|50901308|
|DefineProperty (writable & enumerable=false)|104,267,958|52134887|
|DefineProperty (writable & enumerable=false & configurable=false)|104,400,673|52200357|
|DefineProperties (setter)|95,236,229|47624606|
|DefineProperties (setter & enumerable=false)|11,660,307|5830820|
|DefineProperties (setter & enumerable=false & configurable=false)|11,579,191|5789921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51260889,"opsSec":102475075.18943256},{"name":"Setter","samples":5762266,"opsSec":11524527.98946426},{"name":"Method","samples":50599611,"opsSec":101169983.67237872},{"name":"DefineProperty (setter)","samples":51322536,"opsSec":102645019.65103997},{"name":"DefineProperty (setter & enumerable=false)","samples":5772112,"opsSec":11543790.50757886},{"name":"DefineProperty (setter & configurable=false)","samples":5770752,"opsSec":11541415.938996386},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5982276,"opsSec":11963494.307468276},{"name":"DefineProperty (writable)","samples":50901308,"opsSec":101798658.27176371},{"name":"DefineProperty (writable & enumerable=false)","samples":52134887,"opsSec":104267958.48630683},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52200357,"opsSec":104400673.49253869},{"name":"DefineProperties (setter)","samples":47624606,"opsSec":95236229.01631558},{"name":"DefineProperties (setter & enumerable=false)","samples":5830820,"opsSec":11660307.623289118},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5789921,"opsSec":11579191.527336761}]}-->
