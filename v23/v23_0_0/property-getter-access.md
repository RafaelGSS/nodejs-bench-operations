## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,878,716|47939387|
|Getter|48,212,957|24106484|
|Method|90,028,203|45014132|
|DefineProperty (getter)|97,220,920|48610484|
|DefineProperty (getter & enumerable=false)|50,098,998|25064824|
|DefineProperty (getter & configurable=false)|96,636,230|48318124|
|DefineProperty (getter & enumerable=false & configurable=false)|48,549,069|24274550|
|DefineProperty (writable)|97,540,891|48776696|
|DefineProperty (writable & enumerable=false)|97,224,135|48612089|
|DefineProperty (writable & enumerable=false & configurable=false)|94,087,856|47045355|
|DefineProperties (getter)|48,303,194|24151613|
|DefineProperties (getter & enumerable=false)|49,933,842|24967432|
|DefineProperties (getter & enumerable=false & configurable=false)|50,257,748|25128972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47939387,"opsSec":95878716.85628475},{"name":"Getter","samples":24106484,"opsSec":48212957.58600116},{"name":"Method","samples":45014132,"opsSec":90028203.14093468},{"name":"DefineProperty (getter)","samples":48610484,"opsSec":97220920.75063251},{"name":"DefineProperty (getter & enumerable=false)","samples":25064824,"opsSec":50098998.93542128},{"name":"DefineProperty (getter & configurable=false)","samples":48318124,"opsSec":96636230.7987509},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24274550,"opsSec":48549069.122792035},{"name":"DefineProperty (writable)","samples":48776696,"opsSec":97540891.74455936},{"name":"DefineProperty (writable & enumerable=false)","samples":48612089,"opsSec":97224135.99917325},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47045355,"opsSec":94087856.69165796},{"name":"DefineProperties (getter)","samples":24151613,"opsSec":48303194.2164982},{"name":"DefineProperties (getter & enumerable=false)","samples":24967432,"opsSec":49933842.95277931},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25128972,"opsSec":50257748.09529793}]}-->
