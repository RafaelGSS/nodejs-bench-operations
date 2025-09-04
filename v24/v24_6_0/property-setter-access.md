## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,304,084|49152058|
|Setter|10,391,962|5196022|
|Method|88,596,220|44298131|
|DefineProperty (setter)|92,307,560|46161978|
|DefineProperty (setter & enumerable=false)|10,563,255|5284005|
|DefineProperty (setter & configurable=false)|10,595,145|5298699|
|DefineProperty (setter & enumerable=false & configurable=false)|10,532,280|5266141|
|DefineProperty (writable)|93,388,379|46694213|
|DefineProperty (writable & enumerable=false)|87,724,368|43868651|
|DefineProperty (writable & enumerable=false & configurable=false)|93,047,245|46523635|
|DefineProperties (setter)|96,644,857|48322547|
|DefineProperties (setter & enumerable=false)|10,441,251|5222709|
|DefineProperties (setter & enumerable=false & configurable=false)|10,479,704|5239855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49152058,"opsSec":98304084.93590917},{"name":"Setter","samples":5196022,"opsSec":10391962.547797551},{"name":"Method","samples":44298131,"opsSec":88596220.8913535},{"name":"DefineProperty (setter)","samples":46161978,"opsSec":92307560.88488099},{"name":"DefineProperty (setter & enumerable=false)","samples":5284005,"opsSec":10563255.520943046},{"name":"DefineProperty (setter & configurable=false)","samples":5298699,"opsSec":10595145.620373148},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5266141,"opsSec":10532280.39909338},{"name":"DefineProperty (writable)","samples":46694213,"opsSec":93388379.67936368},{"name":"DefineProperty (writable & enumerable=false)","samples":43868651,"opsSec":87724368.97173123},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46523635,"opsSec":93047245.43552719},{"name":"DefineProperties (setter)","samples":48322547,"opsSec":96644857.02681057},{"name":"DefineProperties (setter & enumerable=false)","samples":5222709,"opsSec":10441251.230753846},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5239855,"opsSec":10479704.026568703}]}-->
