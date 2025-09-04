## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|86,256,496|43190865|
|Setter|10,551,229|5276345|
|Method|94,310,232|47158550|
|DefineProperty (setter)|92,117,209|46058615|
|DefineProperty (setter & enumerable=false)|10,667,526|5334389|
|DefineProperty (setter & configurable=false)|10,757,604|5380186|
|DefineProperty (setter & enumerable=false & configurable=false)|10,676,355|5338178|
|DefineProperty (writable)|91,486,543|45743302|
|DefineProperty (writable & enumerable=false)|92,035,559|46017813|
|DefineProperty (writable & enumerable=false & configurable=false)|91,431,309|45715663|
|DefineProperties (setter)|95,534,310|47773913|
|DefineProperties (setter & enumerable=false)|10,833,384|5416967|
|DefineProperties (setter & enumerable=false & configurable=false)|10,635,838|5317923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":43190865,"opsSec":86256496.43549421},{"name":"Setter","samples":5276345,"opsSec":10551229.9419031},{"name":"Method","samples":47158550,"opsSec":94310232.70609526},{"name":"DefineProperty (setter)","samples":46058615,"opsSec":92117209.18151072},{"name":"DefineProperty (setter & enumerable=false)","samples":5334389,"opsSec":10667526.421795037},{"name":"DefineProperty (setter & configurable=false)","samples":5380186,"opsSec":10757604.305079596},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5338178,"opsSec":10676355.081833463},{"name":"DefineProperty (writable)","samples":45743302,"opsSec":91486543.80185418},{"name":"DefineProperty (writable & enumerable=false)","samples":46017813,"opsSec":92035559.73439698},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45715663,"opsSec":91431309.17663912},{"name":"DefineProperties (setter)","samples":47773913,"opsSec":95534310.57001504},{"name":"DefineProperties (setter & enumerable=false)","samples":5416967,"opsSec":10833384.942384351},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5317923,"opsSec":10635838.491098026}]}-->
