## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,362,494|53181551|
|Getter|55,493,514|27746765|
|Method|104,462,564|52232781|
|DefineProperty (getter)|107,145,996|53577970|
|DefineProperty (getter & enumerable=false)|54,204,770|27103235|
|DefineProperty (getter & configurable=false)|107,282,750|53641388|
|DefineProperty (getter & enumerable=false & configurable=false)|56,145,737|28073338|
|DefineProperty (writable)|105,309,353|52654691|
|DefineProperty (writable & enumerable=false)|106,489,284|53245161|
|DefineProperty (writable & enumerable=false & configurable=false)|107,305,778|53652908|
|DefineProperties (getter)|54,810,340|27405181|
|DefineProperties (getter & enumerable=false)|55,222,823|27611422|
|DefineProperties (getter & enumerable=false & configurable=false)|53,695,883|26847950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:53:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":53181551,"opsSec":106362494.88287921},{"name":"Getter","samples":27746765,"opsSec":55493514.23984196},{"name":"Method","samples":52232781,"opsSec":104462564.34225364},{"name":"DefineProperty (getter)","samples":53577970,"opsSec":107145996.42294797},{"name":"DefineProperty (getter & enumerable=false)","samples":27103235,"opsSec":54204770.57203303},{"name":"DefineProperty (getter & configurable=false)","samples":53641388,"opsSec":107282750.89583628},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28073338,"opsSec":56145737.58014208},{"name":"DefineProperty (writable)","samples":52654691,"opsSec":105309353.56647454},{"name":"DefineProperty (writable & enumerable=false)","samples":53245161,"opsSec":106489284.15543664},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53652908,"opsSec":107305778.22836606},{"name":"DefineProperties (getter)","samples":27405181,"opsSec":54810340.84320844},{"name":"DefineProperties (getter & enumerable=false)","samples":27611422,"opsSec":55222823.01532726},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26847950,"opsSec":53695883.7838431}]}-->
